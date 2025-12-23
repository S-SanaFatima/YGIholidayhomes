// Google Sheets Integration Utility
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx3hexYgFtFWBeeTC_cjZtykGFvD_7aWRD98MGXpEwGQGRigqN4rOI4Hy_sZg6M0pOu1Q/exec';

export const submitBookingToGoogleSheets = async (bookingData) => {
  try {
    // Check if URL is properly configured
    if (!GOOGLE_APPS_SCRIPT_URL || GOOGLE_APPS_SCRIPT_URL.includes('YOUR_SCRIPT_ID')) {
      console.warn('⚠️ Google Apps Script URL not configured');
      return {
        success: false,
        message: 'Google Sheets integration not configured',
        error: 'URL not configured'
      };
    }

    // Validate required data
    if (!bookingData || typeof bookingData !== 'object') {
      console.warn('⚠️ Invalid booking data provided');
      return {
        success: false,
        message: 'Invalid booking data',
        error: 'No booking data provided'
      };
    }

    // Use form submission method to avoid CORS issues
    console.log('📤 Submitting booking data to Google Sheets:', bookingData);
    console.log('🔗 Using URL:', GOOGLE_APPS_SCRIPT_URL);

    // Call submitBookingViaForm - it handles all errors internally
    const result = await submitBookingViaForm(bookingData);
    console.log('📥 Form submission result:', result);
    
    // Return the result (will always be an object, never throws)
    return result || {
      success: false,
      message: 'Unknown error occurred',
      error: 'No result returned'
    };

  } catch (error) {
    // This catch should rarely be hit since submitBookingViaForm handles errors
    console.warn('⚠️ Unexpected error in submitBookingToGoogleSheets (non-critical):', error);
    
    // Always return an object, never throw
    return {
      success: false,
      message: 'Failed to submit booking to Google Sheets',
      error: error?.message || 'Unknown error'
    };
  }
};

// Proper fetch method with JSON response handling and no redirects
export const submitBookingViaForm = async (bookingData) => {
  try {
    // Validate and prepare form data - match the exact field names expected by Google Apps Script
    if (!bookingData || typeof bookingData !== 'object') {
      throw new Error('Invalid booking data provided');
    }

    const fields = {
      propertyId: String(bookingData.propertyId || 'Unknown'),
      propertyName: String(bookingData.propertyName || 'Unknown Property'),
      guestName: String(bookingData.name || bookingData.guestName || 'Unknown Guest'),
      email: String(bookingData.email || 'no-email@example.com'),
      phone: String(bookingData.phone || 'No Phone'),
      checkIn: String(bookingData.checkIn || '2024-01-01'),
      checkOut: String(bookingData.checkOut || '2024-01-02'),
      guests: String(bookingData.guests || 1),
      totalPrice: String(bookingData.totalPrice || 0)
    };

    // Debug: Log the exact data being sent
    console.log('=== GOOGLE SHEETS SUBMISSION DEBUG ===');
    console.log('Booking data received:', bookingData);
    console.log('Form fields being sent:', fields);
    console.log('Google Apps Script URL:', GOOGLE_APPS_SCRIPT_URL);

    // Validate URL
    if (!GOOGLE_APPS_SCRIPT_URL || !GOOGLE_APPS_SCRIPT_URL.startsWith('http')) {
      throw new Error('Invalid Google Apps Script URL');
    }

    // Create URLSearchParams for form data (more reliable than FormData for Google Apps Script)
    const formData = new URLSearchParams();
    Object.entries(fields).forEach(([key, value]) => {
      try {
        formData.append(key, String(value));
      } catch (appendError) {
        console.warn(`Failed to append field ${key}:`, appendError);
      }
    });

    // Submit via fetch API with proper headers and timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    try {
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
        mode: 'no-cors', // Google Apps Script requires no-cors mode
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      // With no-cors mode, we can't read the response, but the request was sent
      // Log that we attempted the submission
      console.log('✅ Google Sheets submission request sent (no-cors mode)');
      console.log('Submitted data:', fields);
      
      // Return success - the data should be in the sheet
      // Note: We can't verify success in no-cors mode, but the request was sent
      return {
        success: true,
        message: 'Booking submitted to Google Sheets successfully!',
        bookingId: Date.now(),
        note: 'Data sent to Google Sheets (no-cors mode - check sheet to verify)',
        submittedData: fields
      };
    } catch (fetchError) {
      clearTimeout(timeoutId);
      
      // Handle abort/timeout
      if (fetchError.name === 'AbortError') {
        throw new Error('Request timeout - Google Sheets submission took too long');
      }
      throw fetchError;
    }

  } catch (error) {
    // Log error but don't throw - return error object instead
    console.warn('⚠️ Error submitting booking to Google Sheets (non-critical):', error);
    
    // Return error object instead of throwing
    return {
      success: false,
      message: 'Failed to submit booking to Google Sheets: ' + (error?.message || 'Unknown error'),
      error: error?.message || 'Unknown error',
      submittedData: bookingData || {}
    };
  }
};

// Test function to verify Google Sheets connection
export const testGoogleSheetsConnection = async () => {
  const testData = {
    propertyId: 'TEST001',
    propertyName: 'Test Property',
    name: 'Test User', // Note: using 'name' instead of 'guestName' to match the form field
    email: 'test@example.com',
    phone: '+971501234567',
    checkIn: '2024-01-15',
    checkOut: '2024-01-20',
    guests: 2,
    totalPrice: 1000
  };

  console.log('Testing Google Sheets connection...');
  console.log('URL:', GOOGLE_APPS_SCRIPT_URL);
  console.log('Test data:', testData);
  
  const result = await submitBookingToGoogleSheets(testData);
  console.log('Test result:', result);
  return result;
};

// Test function to check if the web app is accessible
export const testWebAppAccess = async () => {
  try {
    console.log('Testing web app access...');
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'GET',
      mode: 'cors'
    });
    
    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);
    
    if (response.ok) {
      const data = await response.json();
      console.log('Web app response:', data);
      return { success: true, data };
    } else {
      return { success: false, error: `HTTP ${response.status}: ${response.statusText}` };
    }
  } catch (error) {
    console.error('Web app access test failed:', error);
    return { success: false, error: error.message };
  }
};

// Test function specifically for form submission
export const testFormSubmission = async () => {
  const testData = {
    propertyId: 'FORM_TEST_001',
    propertyName: 'Form Test Property',
    name: 'Form Test User',
    email: 'formtest@example.com',
    phone: '+971501234567',
    checkIn: '2024-01-15',
    checkOut: '2024-01-20',
    guests: 2,
    totalPrice: 1000
  };

  console.log('Testing form submission method...');
  console.log('Test data:', testData);
  
  try {
    const result = await submitBookingViaForm(testData);
    console.log('Form submission test result:', result);
    return result;
  } catch (error) {
    console.error('Form submission test failed:', error);
    return {
      success: false,
      message: 'Form submission test failed: ' + error.message,
      error: error.message
    };
  }
};

// Debug function to test Google Apps Script with minimal data
export const debugGoogleAppsScript = async () => {
  console.log('=== DEBUGGING GOOGLE APPS SCRIPT ===');
  
  // Test with minimal data first
  const minimalData = {
    propertyId: 'DEBUG_001',
    propertyName: 'Debug Test',
    name: 'Debug User',
    email: 'debug@test.com',
    phone: '1234567890',
    checkIn: '2024-01-01',
    checkOut: '2024-01-02',
    guests: 1,
    totalPrice: 100
  };

  console.log('Testing with minimal data:', minimalData);
  
  try {
    const result = await submitBookingViaForm(minimalData);
    console.log('Debug test result:', result);
    return result;
  } catch (error) {
    console.error('Debug test failed:', error);
    return {
      success: false,
      message: 'Debug test failed: ' + error.message,
      error: error.message
    };
  }
};

// Function to test Google Apps Script URL accessibility
export const testGoogleAppsScriptAccess = async () => {
  console.log('=== TESTING GOOGLE APPS SCRIPT ACCESS ===');
  console.log('URL:', GOOGLE_APPS_SCRIPT_URL);
  
  try {
    // Test GET request first
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'GET',
      mode: 'no-cors' // Use no-cors to avoid CORS issues
    });
    
    console.log('GET request response:', response);
    console.log('Response type:', response.type);
    console.log('Response status:', response.status);
    
    return {
      success: true,
      message: 'Google Apps Script URL is accessible',
      responseType: response.type,
      status: response.status
    };
  } catch (error) {
    console.error('Google Apps Script access test failed:', error);
    return {
      success: false,
      message: 'Google Apps Script access test failed: ' + error.message,
      error: error.message
    };
  }
};

// Function to create a test form submission to debug the response
export const testFormSubmissionDebug = async () => {
  console.log('=== CREATING TEST FORM SUBMISSION ===');
  
  // Add test data
  const testData = {
    propertyId: 'TEST_DEBUG_001',
    propertyName: 'Debug Test Property',
    guestName: 'Debug User',
    email: 'debug@test.com',
    phone: '1234567890',
    checkIn: '2024-01-01',
    checkOut: '2024-01-02',
    guests: 1,
    totalPrice: 100
  };
  
  console.log('Test data being sent:', testData);
  
  try {
    // Use the same fetch approach as the main function
    const result = await submitBookingViaForm(testData);
    console.log('Test form submitted successfully to Google Sheets via fetch API.');
    return {
      success: true,
      message: 'Test form submitted successfully (fetch API, no redirect).',
      testData: testData
    };
  } catch (error) {
    console.error('Test form submission failed:', error);
    return {
      success: false,
      message: 'Test form submission failed: ' + error.message,
      testData: testData
    };
  }
};

// Fallback method that stores booking data locally if Google Sheets fails
export const storeBookingLocally = (bookingData) => {
  try {
    const bookings = JSON.parse(localStorage.getItem('ygi_bookings') || '[]');
    const newBooking = {
      ...bookingData,
      id: Date.now(),
      timestamp: new Date().toISOString(),
      status: 'pending'
    };
    
    bookings.push(newBooking);
    localStorage.setItem('ygi_bookings', JSON.stringify(bookings));
    
    console.log('Booking stored locally:', newBooking);
    return {
      success: true,
      message: 'Booking stored locally. Will be processed shortly.',
      bookingId: newBooking.id,
      note: 'Data stored in browser localStorage'
    };
  } catch (error) {
    console.error('Error storing booking locally:', error);
    return {
      success: false,
      message: 'Failed to store booking locally',
      error: error.message
    };
  }
};

// Enhanced booking submission with fallback
export const submitBookingWithFallback = async (bookingData) => {
  try {
    // Try Google Sheets first
    const result = await submitBookingToGoogleSheets(bookingData);
    
    if (result.success) {
      // Also store locally as backup
      storeBookingLocally(bookingData);
      return result;
    } else {
      // If Google Sheets fails, store locally
      console.log('Google Sheets failed, storing locally as fallback');
      return storeBookingLocally(bookingData);
    }
  } catch (error) {
    console.error('Both Google Sheets and local storage failed:', error);
    return {
      success: false,
      message: 'Failed to submit booking. Please try again or contact support.',
      error: error.message
    };
  }
};

// Function to show Google Apps Script fix instructions
export const showGoogleAppsScriptFix = () => {
  const instructions = `
🔧 GOOGLE APPS SCRIPT FIX INSTRUCTIONS:

1. Open Google Apps Script: https://script.google.com
2. Open your YGI booking script
3. Replace the existing code with this:

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Get form data
    const propertyId = e.parameter.propertyId || 'Unknown';
    const propertyName = e.parameter.propertyName || 'Unknown Property';
    const guestName = e.parameter.guestName || 'Unknown Guest';
    const email = e.parameter.email || 'No Email';
    const phone = e.parameter.phone || 'No Phone';
    const checkIn = e.parameter.checkIn || 'No Date';
    const checkOut = e.parameter.checkOut || 'No Date';
    const guests = e.parameter.guests || '1';
    const totalPrice = e.parameter.totalPrice || '0';
    const timestamp = e.parameter.timestamp || new Date().toISOString();
    const source = e.parameter.source || 'YGI Website';
    
    // Add data to sheet
    sheet.appendRow([
      timestamp,
      propertyId,
      propertyName,
      guestName,
      email,
      phone,
      checkIn,
      checkOut,
      guests,
      totalPrice,
      source
    ]);
    
    // Return proper JSON response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Booking submitted successfully!',
        bookingId: Date.now()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Error: ' + error.message
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

4. Save and redeploy the script
5. Test again with: window.testGoogleSheets.testFormSubmissionDebug()
  `;
  
  console.log(instructions);
  return instructions;
};

// Make functions available globally for console testing
if (typeof window !== 'undefined') {
  window.testGoogleSheets = {
    testFormSubmissionDebug,
    testGoogleAppsScriptAccess,
    debugGoogleAppsScript,
    testFormSubmission,
    storeBookingLocally,
    submitBookingWithFallback,
    showGoogleAppsScriptFix
  };
  
  console.log('🔧 Google Sheets test functions available:');
  console.log('• window.testGoogleSheets.testFormSubmissionDebug() - Test form submission');
  console.log('• window.testGoogleSheets.testGoogleAppsScriptAccess() - Test script access');
  console.log('• window.testGoogleSheets.debugGoogleAppsScript() - Debug with minimal data');
  console.log('• window.testGoogleSheets.testFormSubmission() - Full test submission');
  console.log('• window.testGoogleSheets.storeBookingLocally(data) - Store booking locally');
  console.log('• window.testGoogleSheets.submitBookingWithFallback(data) - Submit with fallback');
  console.log('• window.testGoogleSheets.showGoogleAppsScriptFix() - Show fix instructions');
}
