export const apiRequest = async (url, method, body) => {
    const headers = { 'Content-Type': 'application/json' }; // Fix typo 'appplication' to 'application'

    try {
        const response = await fetch(url, {
            method,
            headers,
            body: JSON.stringify(body),
        });

        const responseData = await response.json(); // Parse the response JSON

        // console.log(responseData, 'API Response Debug'); // Debugging log

        if (!response.ok) {
            // Agar response ok nahi hai, errors ko handle karein
            if (responseData.errors) {
                return { success: false, errors: responseData.errors }; // Validation errors ko return karein
            }
            // Agar errors null hai, to message ko fallback ke liye use karein
            return { success: false, errors: { generic: responseData.message || 'An error occurred' } };
        }

        return responseData; // Agar response successful hai, to data return karein
    } catch (error) {
        // console.error('API Request Failed:', error);
        throw error; // Catch block me generic error re-throw karein
    }
};
