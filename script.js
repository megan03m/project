// Initialize charts after DOM loads
document.addEventListener('DOMContentLoaded', function() {
    // Bar Chart: AI User Engagement Over Time
    const engagementCtx = document.getElementById('engagementBarChart').getContext('2d');
    new Chart(engagementCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Engagement Score',
                data: [50, 70, 30, 60, 80],
                backgroundColor: '#6a1b9a',
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true, max: 100 }
            },
            animation: { duration: 1000 }
        }
    });

    // Pie Chart: Data Distribution
    const distributionCtx = document.getElementById('distributionPieChart').getContext('2d');
    new Chart(distributionCtx, {
        type: 'pie',
        data: {
            labels: ['Positive', 'Neutral', 'Negative'],
            datasets: [{
                data: [50, 30, 20],
                backgroundColor: ['#4caf50', '#ffeb3b', '#f44336']
            }]
        },
        options: {
            responsive: true,
            animation: { duration: 1000 }
        }
    });

    // Line Chart: Trend Line (AI Predictions)
    const trendCtx = document.getElementById('trendLineChart').getContext('2d');
    new Chart(trendCtx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'AI Predictions',
                data: [20, 40, 30, 60],
                borderColor: '#6a1b9a',
                fill: false,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true, max: 100 }
            },
            animation: { duration: 1000 }
        }
    });

    // Donut Chart: Sentiment Breakdown
    const sentimentCtx = document.getElementById('sentimentDonutChart').getContext('2d');
    new Chart(sentimentCtx, {
        type: 'doughnut',
        data: {
            labels: ['Positive', 'Negative', 'Neutral', 'Anger'],
            datasets: [{
                data: [40, 20, 25, 15],
                backgroundColor: ['#4caf50', '#f44336', '#ffeb3b', '#2196f3']
            }]
        },
        options: {
            responsive: true,
            animation: { duration: 1000 }
        }
    });

    // Radar Chart: AI Process Flow
    const radarCtx = document.getElementById('radarChart').getContext('2d');
    new Chart(radarCtx, {
        type: 'radar',
        data: {
            labels: ['Workflow', 'Training', 'Production'],
            datasets: [{
                label: 'AI Efficiency',
                data: [80, 90, 70],
                borderColor: '#6a1b9a',
                backgroundColor: 'rgba(106, 27, 154, 0.2)'
            }]
        },
        options: {
            responsive: true,
            scales: {
                r: { beginAtZero: true, max: 100 }
            },
            animation: { duration: 1000 }
        }
    });

    // Update Insights Button - Simulates refresh with animation
    document.getElementById('updateInsights').addEventListener('click', function() {
        // Add a simple reload or animation trigger
        location.reload(); // For demo, reloads page; in production, update data dynamically
    });
});