function readFile(file) {
   filetype;
   source;
   height;
   width;
   sendToReader(filetype, source, height, width)
}

function sendToReader(filetype, source, height, width) {
   viewer = document.getElementById(viewer);
   // clear class, src, and dimesnion value
   viewer.innerHTML = null;
   // find a way to assign and pass values through if statement
   viewer.innerHTML = 'class="' + filetype + ' src="' + source + ' height="' + height + ' width="' + width + '"';
}

function message() {
   alert("Welcome. Keep your prints, faces, and IPs outside of the vehicle");
}
