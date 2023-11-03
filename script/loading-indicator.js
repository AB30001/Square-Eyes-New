const loadingIndicator = document.getElementById('loading-indicator');

function showLoadingIndicator() {
    if (loadingIndicator) loadingIndicator.style.display = 'block';
}

function hideLoadingIndicator() {
    if (loadingIndicator) loadingIndicator.style.display = 'none';
}

