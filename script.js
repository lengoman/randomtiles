// Add your javascript here
$(function(){
 // Code goes here
$shape = $('<a class="shape"></a>');
	$container = $(".flex");
	var abc=["a","b","c","d","e","f","g","h","i","j","k","l"];
	var square = {x: 0, y: 0, width: screen.width-10, height: screen.height-80};
	var struct = [square];

	$.each( binary(struct), function(i){
	    $container.append(
	        $shape.css({
	            width: this.width,
	            height: this.height,
	            top: this.y,
	            left: this.x,
	            zIndex: i
	        }).attr('bg',abc[i]).attr("width",this.width+100).attr("height",this.height+100)
	        .text(abc[i])
	        .clone()
	    );
	});

	function binary(struct) {
	    var axis = 1;
	    function subdivide(index) {
	      
	        var item = struct.splice(index, 1)[0];
	        if(axis > 0) {
	            var aw = item.width / 2;
	            var ow = Math.random() * aw;
	            ow -= ow / 2;
	            var ax = Math.round(item.width / 2 + ow);
	            var bx = item.width - ax;
	            struct.push({x: item.x, y: item.y, width: ax, height: item.height});
	            struct.push({x: item.x + ax, y: item.y, width: bx, height: item.height});
	        } else {
	            var ah = item.height / 2;
	            var oh = Math.random() * ah;
	            oh -= oh / 2;
	            var ay = Math.round(item.height / 2 + oh);
	            var by = item.height - ay;
	            struct.push({x: item.x, y: item.y, width: item.width, height: ay});
	            struct.push({x: item.x, y: item.y + ay, width: item.width, height: by});
	        }

	        axis = -axis;
	    }

	    while(struct.length < 9) {
	        var index = Math.round(Math.random() * (struct.length-1));
	        subdivide(index);
	    }

	    return struct;
	}

});