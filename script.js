$(function(){
  const year = new Date().getFullYear();
  $('#year, #year3').text(year);

  $('#download-resume').on('click', function(){
    window.print();
  });

  // Local non-persistent view counter for demo
  let count = parseInt(localStorage.getItem('view-count') || '0', 10) + 1;
  localStorage.setItem('view-count', count);
  $('#view-count').text(count);
});
