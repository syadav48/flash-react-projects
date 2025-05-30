const createLogger = (level) => (message) => {
    const timestamp = new Date().toISOString();
    return (
        <p className={level.toUpperCase()}>{message} - {timestamp}</p>
    )
};

const infoLogger = createLogger('info');
const warnLogger = createLogger('warn');
const errorLogger = createLogger('error');

infoLogger('User logged in successfully.');
// Example Output:[INFO]: User logged in successfully.

warnLogger('API rate limit approaching.');
// Example Output:: API rate limit approaching.

errorLogger('Failed to fetch critical data from API.');
// Example Output:: Failed to fetch critical data from API.