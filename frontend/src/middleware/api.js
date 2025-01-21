export const apiRequest = async (url, method, body = null) => {
    try {
        const response = await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: body ? JSON.stringify(body) : null,
        });
        const data = await response.json();
        if (!response.ok) throw data;
        return data;
    } catch (error) {
        return {
            success: false,
            message: error.message || 'API Error',
            errors: error.errors || null,
        };
    }
};
