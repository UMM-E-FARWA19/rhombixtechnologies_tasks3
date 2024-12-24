//  'Load More' functionality
document.getElementById('loadMoreBtn').addEventListener('click', function() {
    let rows = document.querySelectorAll('#historyTable tbody tr');
    let hiddenRows = Array.from(rows).filter(row => row.style.display === 'none');
  
    if (hiddenRows.length > 0) {
      for (let i = 0; i < 5 && hiddenRows[i]; i++) {
        hiddenRows[i].style.display = 'table-row';
      }
    } else {
      this.textContent = 'No More History';
      this.disabled = true;
    }
  });
  

