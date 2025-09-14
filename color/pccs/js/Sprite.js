/* =========================================================================
   Class : Sprite
   ------------------------------------------------------------------------- */
function Sprite(){
	this.initialize.apply(this, arguments);
}

Sprite.prototype.initialize = function(key_id){

	this.key = key_id;

	this.x = 0;
	this.y = 0;

	this.offset_x = 0;
	this.offset_y = 0;

	this.flg_move  = false;
	this.move_type = 0;		// 0 convergencely, 1 slide
	this.move_x_to = 0;
	this.move_y_to = 0;
	this.move_s_step = 0;
	this.move_s_dist = 0;
	this.move_s_trip = 0;
	this.move_s_dx   = 0;
	this.move_s_dy   = 0;

	// setter / getter
	// ------------------------------------------------------------------------
	this.setXY = function(x,y){
		this.x = x;
		this.y = y;
	};
	this.setOffsetXY = function(ox,oy){
		this.offset_x = 0;
		this.offset_y = 0;
	};
	this.calcX = function(){
		return this.x + this.offset_x;
	};
	this.calcY = function(){
		return this.y + this.offset_y;
	};
};


// ===== moving engine =====
// ------------------------------------------------------------------------
Sprite.prototype.move = function()
{
	if ( !this.flg_move ) return;

	var x = this.x;
	var y = this.y;

	// Convergencely move
	if ( this.move_type == 0 )
	{
		var dx = this.move_x_to - x,
		    dy = this.move_y_to - y;
		if ( Math.abs(dx)<=1 && Math.abs(dy)<=1 ){
			this.flg_move = false;
			this.x = this.move_x_to;
			this.y = this.move_y_to;
			return;		// moving end
		}
		var mx = x + dx/2,
		    my = y + dy/2;
//		this.x = dx>=0? Math.ceil( mx ): Math.floor( mx );
//		this.y = dy>=0? Math.ceil( my ): Math.floor( my );
		this.x = Math.ceil( mx );
		this.y = Math.ceil( my );
	}

	// Slidely move
	else if ( this.move_type == 1 )
	{
		var mx = this.move_x_to;
		var my = this.move_y_to;
		var dx = this.move_s_dx;
		var dy = this.move_s_dy;
		var d  = this.move_s_dist;
		var t  = this.move_s_trip;
		var s  = this.move_s_step;
		if ( !d ){
			dx = mx - x;
			dy = my - y;
			d = Math.sqrt(dx*dx + dy*dy);
			if ( d == 0 ){
				this.flg_move = false;
				return;		// no need to move;
			}
			var c = s/d;
			dx*=c, dy*=c;
			this.move_s_dx = dx;
			this.move_s_dy = dy;
		}
		x += dx;
		y += dy;
		t += s;
		if ( t > d ){
			// moving end
			this.x = this.move_x_to;
			this.y = this.move_y_to;
			this.flg_move = false;
		} else {
			this.x = x;
			this.y = y;
		}
	}
};

// ===== kick to move =====
// ------------------------------------------------------------------------
Sprite.prototype.startMove = function(type, mx, my, step )
{
	this.flg_move = true;
	this.move_x_to = mx;
	this.move_y_to = my;

	if ( type == 1 ){
		this.move_s_dist = 0;
		this.move_s_trip = 0;
		this.move_s_step = step || 10;
	}
};


