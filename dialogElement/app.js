(function() {
   
  // Gather page elements
  
  var openDialog = document.getElementById('openDialog');
  var openModalDialog = document.getElementById('openModalDialog');
  var dialogWindow = document.getElementById('dialogWindow');
  
  // Open the dialog window normally
  
  openDialog.addEventListener('click',function(){
    dialogWindow.show();
  });
  
  // Open Modal dialog
   openModalDialog.addEventListener('click',function(){
    dialogWindow.showModal();
  });
  
  
})();
