/* =========================================================================
   Tone Map based by Normal Javascript
   ------------------------------------------------------------------------- */
(function( window ) {

	var MOVE_TYPE = 0;
	var FADE_SPEED = "slow";
	var GRID_COLOR = "#ccc";

	var W0_COOD_MATRIX     = [90,-60];
	var W0_COOD_UNIT_Y_PXL = Math.abs(W0_COOD_MATRIX[1]);
	var W0_COOD_OFFSET_X   = 50;
	var W0_COOD_OFFSET_Y   = 10 * W0_COOD_UNIT_Y_PXL + 20;

	var W1_COOD_MATRIX     = [80,-60];
	var W1_COOD_UNIT_Y_PXL = Math.abs(W1_COOD_MATRIX[1]);
	var W1_COOD_OFFSET_X   = 50;
	var W1_COOD_OFFSET_Y   = 10 * W1_COOD_UNIT_Y_PXL + 20;

	var W2_COOD_MATRIX     = [60, 36];
	var W2_COOD_UNIT_X_PXL = Math.abs(W2_COOD_MATRIX[0]);
	var W2_COOD_UNIT_Y_PXL = Math.abs(W2_COOD_MATRIX[1]);
	var W2_COOD_OFFSET_X   = 50;
	var W2_COOD_OFFSET_Y   = 75;

	var W3_COOD_MATRIX     = [32, -60];
	var W3_COOD_UNIT_X_PXL = Math.abs(W3_COOD_MATRIX[0]);
	var W3_COOD_UNIT_Y_PXL = Math.abs(W3_COOD_MATRIX[1]);
	var W3_COOD_OFFSET_X   = 50;
	var W3_COOD_OFFSET_Y   = 10 * W3_COOD_UNIT_Y_PXL + 20;


	var TONE_CIRCLE_WIDTH      = 60;
	var TONE_CIRCLE_HEIGHT     = 60;
	var TONE_CIRCLE_RADIUS_PXL = 50;

	var COL_LABEL_WIDTH   = 36;
	var COL_LABEL_HEIGHT  = 16;
	var GRAY_BOX_WIDTH    = 32;
	var GRAY_LABEL_WIDHT  = 48;
	var GRAY_LABEL_HEIGHT = 16;


	var _px = function(v){
		return ( ( v > 0 )? Math.ceil(v): Math.floor(v) )+"px";
	};

	// ========== Class Extending ==========

	// ---------- Sprite ----------
	Sprite.prototype.get$ = function(){
		var _re0 = /\+/;
		var _re1 = /\-/;
		var _re2 = /\./;
		var keyid = this.key
			.replace(_re0,'\\+')
			.replace(_re1,'\\-')
			.replace(_re2,'\\.');
		return $('#'+keyid);
	};
	Sprite.prototype.refrect2DOMElement = function(func){
		var d = this.get$();
		func.apply(d, [d,this,arguments]);
	};

	// ---------- PCCSColor ----------
	// initialization
	PCCSColor.prototype.G_init = function( parent )
	{

		this.parent = parent;
		var id = "COL_"+this.name;	// COL_p+1,COL_p+2,...
		this.sprite = new Sprite(id);
		var content = $("<div />").attr("id",id);

		var bgcol = '#'+this.rgbHex;
		var fgcol = ( this.lightness<5.5 )? "#ccc": "#333";
		var w,h;
		if ( this.is_gray ){
			w = GRAY_LABEL_WIDHT, h = GRAY_LABEL_HEIGHT;
		} else {
			w = COL_LABEL_WIDTH,  h = COL_LABEL_HEIGHT;
		}
		$.data(content.get(0), "PCCSColor", this);

		// ----- design -----
		content
			.addClass("col_tag")
			.css({
				width:      _px(w),
				height:     _px(h),
				marginLeft: _px(-w/2-1),
				marginTop:  _px(-h/2-2)
			});

		$("<b />")
			.addClass("rnd0").addClass("rnd1")
			.css("width",_px(w-2))
			.appendTo(content);
		$("<b />")
			.addClass("rnd0").addClass("rnd2")
			.css({ width: _px(w-2),
			       backgroundColor: bgcol
			}).appendTo(content);

		var body = $("<b />")
			.addClass("tag_body")
			.css({
				width:      _px(w),
				height:     _px(h),
				lineHeight: _px(h),
				color:           fgcol,
				backgroundColor: bgcol
			});
		// -- p+1, p+2, ... / W, Gy-8.5
		$("<i />").addClass("C_tonename").text(this.name).appendTo(body);
		// --- 1,2,3,... / 1.5, 2.5, ...
		$("<i />").addClass("C_toneindex").hide().text( this.is_gray? this.lightness: this.hueIndex ).appendTo(body);
		// --- lightness
		$("<i />").addClass("C_lightness").hide().text(this.lightness).appendTo(body);
		body.appendTo(content);

		$("<b />")
			.addClass("rnd0").addClass("rnd2")
			.css({ width: _px(w-2),
			       backgroundColor: bgcol
			}).appendTo(content);
		$("<b />")
			.addClass("rnd0").addClass("rnd3")
			.css("width",_px(w-2))
			.appendTo(content);

		content.appendTo( parent );
	};

	// moving
	PCCSColor.prototype.G_move = function(){
		this.sprite.move();
		this.sprite.refrect2DOMElement(function(dom,spr){
			dom.css({ left: _px(spr.x),
			          top:  _px(spr.y) });
		});
	};
	// DOM rotate
	PCCSColor.prototype.G_DOMrotate = function(rad){
		var radt= "rotate("+rad+"rad)";
		this.sprite.refrect2DOMElement(function(dom,spr){
			dom.css("-webkit-transform",radt)
				.css("-moz-transform",radt);
		})
	};

	// ---------- PCCSTone ----------
	// initialization
	PCCSTone.prototype.G_init = function( parent )
	{
		var id = ("TONE_"+this.sign);	// TONE_p, TONE_p+, ...
		this.sprite = new Sprite(id);
		var content = $("<div />").attr("id",id);

		// ----- design -----
		content.addClass("tone_ckl");

		var bg = $("<div />")
			.addClass("tone_ckl_BG");
		if ( this.is_gray ){
			var h = W0_COOD_UNIT_Y_PXL * (this.colors.length-1) + GRAY_LABEL_HEIGHT * 4;
			bg.addClass("tone_ckl_BG_Gray")
				.css({
					width:  _px(GRAY_BOX_WIDTH),
					height: _px(h-GRAY_LABEL_HEIGHT),
					left:   _px(-GRAY_BOX_WIDTH/2),
					top:    _px(-h/2),
					fontSize: "75%"
				})
				.text(this.sign);
		} else {
			bg.css({
				width:      _px(TONE_CIRCLE_WIDTH),
				height:     _px(TONE_CIRCLE_HEIGHT),
				left:       _px(-TONE_CIRCLE_WIDTH/2),
				top:        _px(-TONE_CIRCLE_HEIGHT/2),
				lineHeight: _px(TONE_CIRCLE_HEIGHT)
			})
			.text(this.sign);
		}

		// ----- Color Tags -----
		content.append(bg).appendTo(parent);
		for (var i=0; i<this.colors.length; i++){
			this.colors[i].G_init( content );
		}

	};

	// moving
	PCCSTone.prototype.G_move = function(){
		this.sprite.move();
		this.sprite.refrect2DOMElement(function(dom,spr){
			dom.css({ left: _px(spr.x),
			          top:  _px(spr.y) });
		});
		for (var i=0; i<this.colors.length; i++){
			this.colors[i].G_move();
		}
	};


var PCCSToneFig = {
	tones: null,
	curFigId: null,

	viewsw: {
		lightnesssw: {
			"p":   true,
			"p+":  true,
			"ltg": false,
			"g":   false,
			"dkg": false,

			"lt":  true,
			"lt+": true,
			"sf":  false,
			"d":   true,
			"dk":  true,

			"b":   true,
			"s":   false,
			"dp":  true,

			"v":   true
		}
	},

	// Utility
	// ----------------------------------------------------------------
	get_world_size: function(){
		var wld = $("#tonelayer");
		return {w: wld.css("width"), h: wld.css("height")};
	},

	// Iterator for tones
	// ----------------------------------------------------------------
	each_tone: function(func){
		var l = PCCS.tonelist.length + PCCS.graylist.length;
		for ( var i=0; i<l; i++ ){
			var ret = func.apply(this.tones[i], [i, arguments]);
			if ( ret === false ) break;
		}
	},

	// ================================================================
	// Initialization
	// ----------------------------------------------------------------
	initialize: function ()
	{
		this.tones = new Array();

		var mainlayer = $("#tonelayer")
			.css({ width:  $("#maincanvas").width(),
			       height: $("#maincanvas").height() });

		// make tone circle and color labels ---
		for ( var i=0; i<PCCS.tonelist.length; i++ ){
			this.tones.push( new PCCSTone(PCCS.tonelist[i]) );
		}
		for ( var i=0; i<PCCS.graylist.length; i++ ){
			this.tones.push( new PCCSTone(PCCS.graylist[i]) );
		}

		this.each_tone(function(i){
			this.G_init( mainlayer );
		});
	},


	// ================================================================
	// Interval function
	// ----------------------------------------------------------------
	draw: function()
	{
		// move tone circle and color labels ---
		this.each_tone(function(i){
			this.G_move();
		});
	},


	// ================================================================
	// positioning
	// ----------------------------------------------------------------
	default_placing: function ()
	{
		// This positionings base coordination calculator
		var calcCoord = function(x,y){
			return {
				x: x * W0_COOD_MATRIX[0] + W0_COOD_OFFSET_X,
				y: y * W0_COOD_MATRIX[1] + W0_COOD_OFFSET_Y
			};
		};

		var pseudoCoord = function(s){
			var p = {
				"p":   [1.5, 8.5],
				"p+":  [2.0, 8.5],
				"ltg": [1.5, 6.5],
				"g":   [1.5, 4.5],
				"dkg": [1.5, 2.5],

				"lt":  [3.7, 8.5],
				"lt+": [4.2, 8.5],
				"sf":  [3.7, 6.4],
				"d":   [3.7, 4.6],
				"dk":  [3.7, 2.5],

				"b":   [5.8, 7.7],
				"s":   [5.8, 5.5],
				"dp":  [5.8, 3.3],

				"v":   [8.0, 5.5]
			}[s];
			return { x:p[0], y:p[1] };
		};

		// canvas background
		this.change_bg('./img/fig_bg_pccstone.gif');

		// switch displaying of tones
		this.switch_colortone(true);
		this.switch_monotone(true);

		// panel modifying
		this.change_panel();

		// positioning
		this.each_tone(function(i)
		{
			if ( this.is_gray ){

				// monotone
				var ml = this.mlightness;
				var p  = calcCoord(0, ml);
				this.sprite.startMove(MOVE_TYPE, p.x, p.y);

				var p0 = calcCoord(0,10);
				for (var i=0; i<this.colors.length; i++){
					var c = this.colors[i];
					var dl = ml - c.lightness;
					c.sprite.startMove(MOVE_TYPE, 0, dl*W0_COOD_UNIT_Y_PXL);
				}

			} else {

				// colored
				var pc = pseudoCoord(this.sign);
				var p = calcCoord(pc.x, pc.y);
				this.sprite.startMove(MOVE_TYPE, p.x, p.y);

				for (var i=0; i<this.colors.length; i++){
					var c = this.colors[i];
					var r = TONE_CIRCLE_RADIUS_PXL;
					if ( this.sign == "v" ) r *= 2;
					if ( this.sign == "s" ) r *= 0.8;
					var rad =  Math.PI * (c.hueRadianNo/12);
					var cx  =  Math.cos(rad) * r;
					var cy  = -Math.sin(rad) * r;
					c.sprite.startMove(MOVE_TYPE, cx, cy);
				}

			}
		});
	},


	// S-L Tone Graph
	// ----------------------------------------------------------------
	placing_sltone: function ()
	{
		// This positionings base coordination calculator
		var calcCoord = function(x,y){
			return {
				x: x * W1_COOD_MATRIX[0] + W1_COOD_OFFSET_X,
				y: y * W1_COOD_MATRIX[1] + W1_COOD_OFFSET_Y
			};
		};

		// canvas background
		this.change_bg('./img/fig_bg_sltonegrp.gif');

		// switch displaying of tones
		this.switch_colortone(true);
		this.switch_monotone(true);

		// panel modifying
		this.change_panel();

		// positioning
		this.each_tone(function(i)
		{
			var ml = this.mlightness;
			if ( this.is_gray ){

				// monotone
				var p  = calcCoord(0, ml);
				this.sprite.startMove(MOVE_TYPE, p.x, p.y);

				var p0 = calcCoord(0,10);
				for (var i=0; i<this.colors.length; i++){
					var c = this.colors[i];
					var dl = ml - c.lightness;
					c.sprite.startMove(MOVE_TYPE, 0, dl * W1_COOD_UNIT_Y_PXL);
				}

			} else {

				// colored
				var ts = this.sign;
				var s  = this.saturation;
				var p  = calcCoord(s, ml);
				this.sprite.startMove(MOVE_TYPE, p.x, p.y);

				for (var i=0; i<this.colors.length; i++){
					var c = this.colors[i];
					var hi  =  c.hueIndex;
					var rad =  Math.PI * (c.hueRadianNo/12);
					var cx  =  Math.cos(rad) * TONE_CIRCLE_RADIUS_PXL;
//					var cy  = -Math.sin(rad) * TONE_CIRCLE_RADIUS_PXL;

					var dl  = ml - c.lightness;
					var cy  = (dl * W1_COOD_UNIT_Y_PXL);
					if ( 17<=hi && hi<=23 ){
						cy *= Math.abs(Math.sin(rad));
					}
					if ( s==2 ){	// p, ltg, g or dkg
						if ( hi==4 || hi==12 ){
							cy -= COL_LABEL_HEIGHT;
						} else if ( hi==16 || hi==24 ){
							cy += COL_LABEL_HEIGHT;
						}
						else if ( hi==6 || hi==10 ){
							cy *= Math.abs(Math.sin(rad));
						}
					}
					if ( ts=="p+" ){
						if ( hi==4 || hi==12 || hi==16 || hi==24 ){
							cy -= COL_LABEL_HEIGHT;
						}
					}
					if ( ts=="dk" ){
						if ( hi==16 || hi==24 ){
							cy += COL_LABEL_HEIGHT;
						}
					}
					c.sprite.startMove(MOVE_TYPE, cx, cy);
				}

			}
		});
	},


	// Color Table
	// ----------------------------------------------------------------
	placing_coltable: function ()
	{
		// This positionings base coordination calculator
		var calcCoord = function(x,y){
			return {
				x: x * W2_COOD_MATRIX[0] + W2_COOD_OFFSET_X,
				y: y * W2_COOD_MATRIX[1] + W2_COOD_OFFSET_Y
			};
		};

		// canvas background
		this.change_bg();

		// switch displaying of tones
		this.switch_colortone(true);
		this.switch_monotone(false);

		// panel modifying
		this.change_panel();

		// positioning
		var ox = 0.5;	// inner offset between tone name and color
		var count = 0;
		for ( var i=0; i<PCCS.tonelist3.length; i++ ){

			var targ = PCCS.tonelist3[i];
			if ( !this.check_alttone(targ) ) continue;

			for ( var ii=0; ii<this.tones.length; ii++ ){

				var t = this.tones[ii];

				if ( t.is_gray )      continue;
				if ( t.sign != targ ) continue;

				var p = calcCoord(0,count++);
				t.sprite.startMove(MOVE_TYPE, p.x, p.y);

				var l  = t.colors.length;
				if ( l == 24 ) {
					for (var j=0,k=1,dx=-0.5; j<l; j++,k^=1,dx+=0.5){
						var c = t.colors[j];
						c.sprite.startMove(MOVE_TYPE, calcCoord(ox+dx,0).x, 0);
						if ( k ){
							// hide for v ( 24 colors will be chomped to 12 )
							c.sprite.refrect2DOMElement(function(dom,spr){
								$(dom).hide();
							});
						}
					}
				} else {
					for (var j=0; j<l; j++){
						t.colors[j].sprite.startMove(MOVE_TYPE, calcCoord(ox+j,0).x, 0);
					}
				}
			}
		}
	},

	// Lightness graph
	// ----------------------------------------------------------------
	placing_lightness: function ()
	{
		// This positionings base coordination calculator
		var calcCoord = function(x,y){
			return {
				x: x * W3_COOD_MATRIX[0] + W3_COOD_OFFSET_X,
				y: y * W3_COOD_MATRIX[1] + W3_COOD_OFFSET_Y
			};
		};
		var calcCoord2 = function(x,y){
			return {
				x: x * W3_COOD_MATRIX[0],
				y: y * W3_COOD_MATRIX[1]
			};
		};

		// canvas background
		this.change_bg('./img/fig_bg_lightness.gif');

		// switch displaying of tones
		this.switch_colortone(true);
		this.switch_monotone(true);

		// panel modifying
		this.change_panel();

		// positioning
		var ox = -0.5;	// inner offset between tone name and color
		var count = 0;
		for ( var i=0; i<PCCS.tonelist3.length; i++ ){

			var targ = PCCS.tonelist3[i];

			for ( var ii=0; ii<this.tones.length; ii++ ){

				var t = this.tones[ii];

				if ( t.is_gray )      continue;
				if ( t.sign != targ ) continue;

				var c0l = t.colors[0].lightness;
				var p = calcCoord( 1.5, c0l );
				t.sprite.startMove( MOVE_TYPE, p.x, p.y );

				var l  = t.colors.length;
				for ( var j=0; j<l; j++ ){
					var c  = t.colors[j];
					     p = calcCoord2( c.hueIndex, c.lightness - c0l );
					c.sprite.startMove( MOVE_TYPE, p.x, p.y );
				}

			}
		}
	},

	// ================================================================
	// view switching handler
	// ----------------------------------------------------------------
	switch_change_figure: function(id)
	{
		this.curFigId = id;
		$("#canvastitle").text( $("#"+id+" ~ label").attr("title") );
		if      ( id == "fig_tone"  )      this.default_placing();
		else if ( id == "fig_sltone" )     this.placing_sltone();
		else if ( id == "fig_coltb" )      this.placing_coltable();
		else if ( id == "fig_lightness" )  this.placing_lightness();
	},

	// change background
	// ----------------------------------------------------------------
	change_bg: function(src)
	{
		var canvas = $("#maincanvas");
		$("#canvasbg")
			.css({
				width:  canvas.css("width"),
				height: canvas.css("height")
			})
			.hide()
			.css("background",
				src? "#fff url('"+src+"') no-repeat": "#fff none"
			)
			.fadeIn(FADE_SPEED);
	},


	// switch label viewing
	// ----------------------------------------------------------------
	switch_label: function(selid)
	{
		$(".col_tag i").hide();

		var target='';
		if      ( selid == "label_tone"  ) target = "i.C_tonename";
		else if ( selid == "label_hueno" ) target = "i.C_toneindex";
		else if ( selid == "label_ltnes" ) target = "i.C_lightness";
		if ( target ){
			$(target).show();
		}
		if ( selid == "label_nolabel" ){
			// frame only
			$(".col_tag .rnd2,.tag_body").css("background-color","#fff");
		} else {
			// frame repaint
			$(".col_tag").each(function(){
				var bgcol = '#' + $.data(this, "PCCSColor").rgbHex;
				$(".rnd2,.tag_body", this).css("background-color",bgcol);
			});
		}
	},

	// p, lt and s tone visible
	// ----------------------------------------------------------------
	check_alttone: function(t){
		if ( t == "p" ){
			return $("#ck_tone_p").get(0).checked;
		} else if ( t == "p+" ){
			return !$("#ck_tone_p").get(0).checked;
		} else if ( t == "lt" ){
			return $("#ck_tone_lt").get(0).checked;
		} else if ( t == "lt+" ){
			return !$("#ck_tone_lt").get(0).checked;
		} else if ( t == "s" ){
			return $("#ck_tone_s").get(0).checked;
		}
		return true;
	},

	switch_alttone: function()
	{
		var self = this;
		$.each(["p","p+","lt","lt+","s"], function(){
			var s = this.replace(/\+/,"\\+");
			if ( self.check_alttone(this) ){
				$("#TONE_" + s).fadeIn(FADE_SPEED);
			} else {
				$("#TONE_" + s).fadeOut(FADE_SPEED);
			}
		});
		// refresh if need
		if ( this.curFigId == "fig_coltb" ) this.placing_coltable();
	},


	// hide/show monotones
	// ----------------------------------------------------------------
	switch_colortone: function(sw)
	{
		var self = this;
		this.each_tone(function(i){

			if ( this.is_gray ) return;
			if ( self.check_alttone(this.sign) ){
				this.sprite.get$().show();
			} else {
				this.sprite.get$().hide();
				return;
			}

			this.sprite.refrect2DOMElement(function(dom,spr){
				if ( sw ) $(dom).fadeIn(FADE_SPEED);
				else      $(dom).fadeOut(FADE_SPEED);
			});
			for (var i=0; i<this.colors.length; i++){
				this.colors[i].sprite.refrect2DOMElement(function(dom,spr){
					if ( sw ) $(dom).fadeIn(FADE_SPEED);
					else      $(dom).fadeOut(FADE_SPEED);
				});
			}
		});
	},

	switch_monotone: function(sw)
	{
		this.each_tone(function(i){

			if ( !this.is_gray ) return;

			this.sprite.refrect2DOMElement(function(dom,spr){
				if ( sw ) $(dom).fadeIn(FADE_SPEED);
				else      $(dom).fadeOut(FADE_SPEED);
			});
			for (var i=0; i<this.colors.length; i++){
				this.colors[i].sprite.refrect2DOMElement(function(dom,spr){
					if ( sw ) $(dom).fadeIn(FADE_SPEED);
					else      $(dom).fadeOut(FADE_SPEED);
				});
			}
		});
	},

	// hide/show lightness dip switch
	// ----------------------------------------------------------------
	change_panel: function()
	{
		var id = this.curFigId;
		$("#dipswpanel").empty().hide();

		if ( id == "fig_lightness" ){
			$.each(PCCS.tonelist, function()
			{
				var sign = this+"";	// stringify
				if ( !PCCSToneFig.check_alttone(sign) ) return;

				var t = PCCSToneFig.viewsw.lightnesssw[sign];

				$("<span />")
					.addClass("sw")
					.text(sign)
					.addClass( t? "sw_on": "sw_off" )
					.click(function(e){
						PCCSToneFig.toggle_lightness_panel_sw( $(e.target) );
					})
					.appendTo("#dipswpanel");

				var s = sign.replace(/\+/,"\\+");
				if ( t ) $("#TONE_" + s).fadeIn(FADE_SPEED);
				else     $("#TONE_" + s).fadeOut(FADE_SPEED);
			});
			$("#dipswpanel").show();
		}

	},

	toggle_lightness_panel_sw: function(swobj)
	{
		var s = swobj.text().replace(/\+/,"\\+");
		if ( PCCSToneFig.viewsw.lightnesssw[s] ){
			swobj.removeClass("sw_on")
				.addClass("sw_off");
			PCCSToneFig.viewsw.lightnesssw[s] = false;
			$("#TONE_" + s).fadeOut(FADE_SPEED);
		} else {
			swobj.removeClass("sw_off")
				.addClass("sw_on");
			PCCSToneFig.viewsw.lightnesssw[s] = true;
			$("#TONE_" + s).fadeIn(FADE_SPEED);
		}
	},

	dummy: ''
};

window.PCCSToneFig = PCCSToneFig;

})(window);






