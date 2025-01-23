function read(file, source) {
   viewer = document.getElementById(viewer);
   // clear class, src, and dimesnion value
   // find a way to assign and pass values through if statement

   switch (file) {
      case pdf:
         viewer.innerHTML = 'class = "pdf" src = "source" width = "" height = ""';
         break;
      case picture:

         break;
      case epub:
         break;
      default:
         break;
   }
 }
