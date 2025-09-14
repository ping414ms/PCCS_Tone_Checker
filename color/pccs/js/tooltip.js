/* *************************************************************************
 *
 * tooltip.js - Tooltip maker for PCCS Tone Checker @ garakuta.net
 *            - (C)garakuta.net
 *
 * ( PCCS is a color system, copyright of which is holded by Japan Color
 *   Research Institute has its )
 *
 *************************************************************************** */


/* =========================================================================
   tooltip
   ------------------------------------------------------------------------- */
(function( window ){

	var HSPACE = 20;
	var VSPACE = 20;
	var TTPADD = 20;

	var tt = $("<div />")
		.attr("id","tooltip")
		.hide();

	tt.modTooltip = function(div){
		var pccscol = $.data(div.get(0),"PCCSColor");

		var sample = $("<div />")
			.addClass("colsample")
			.append( $("<samp />").css("background-color", '#'+pccscol.rgbHex).html("&nbsp;") )
			.append( $("<dfn />").text( pccscol.name ) );

		var table = $("<table />")
			.attr("id", "ttcolmat");
		$("<tr />")
			.css("border-bottom","solid 1px #ccc")
			.append( $("<th />").text("PCCS") )
			.append( $("<td />").addClass("params")
				.append( $("<input />").attr("value", pccscol.PCCSCode) )
			)
		.appendTo(table);
		$("<tr />")
			.css("border-bottom","solid 1px #ccc")
			.append( $("<th />").text("Munsell") )
			.append( $("<td />").addClass("params")
				.append( $("<input />").attr("value", pccscol.MunsellCode) )
			)
		.appendTo(table);
		$("<tr />")
			.append( $("<th />").html("RGB<sub>16</sub>") )
			.append( $("<td />").addClass("params")
				.append( $("<input />").attr("value", pccscol.rgbHex) )
			)
		.appendTo(table);
		$("<tr />")
			.css("border-bottom","solid 1px #ccc")
			.append( $("<th />").html("RGB<sub>10</sub>") )
			.append( $("<td />").addClass("params")
				.append( $("<input />").attr("value", pccscol.rgb.join(",")) )
			)
		.appendTo(table);
		$("<tr />")
			.append( $("<th />").text("CMYK") )
			.append( $("<td />").addClass("params")
				.append( $("<input />").attr("value", pccscol.cmyk.join(",")) )
			)
		.appendTo(table);

		table = $("<form />").append(table);
		this.empty()
			.append(sample)
			.append(table);
		$("input",this).each(function(){
			$(this).click(function(e){
				this.select();
				e.stopPropagation();
			})
		});
		return this;
	};

	// Tooltip positioning
	var getPosi = function(tag)
	{
		var x = $(tag.parent()).position().left + tag.position().left,
		    y = $(tag.parent()).position().top  + tag.position().top;
		var ttx = x + HSPACE,
		    tty = y + VSPACE,
		    ttw = tt.outerWidth(),
		    tth = tt.outerHeight();

		if ( ttx + ttw > $("#maincanvas").width() ){
			ttx = x - ttw - TTPADD;
		}
		if ( tty + tth > $("#maincanvas").height() ){
			tty = y - tth - TTPADD;
		}

		return { x: ttx, y: tty };
	};

	// modify Tooltip with analized color data

var ToolTip = {

	hold: false,

	initialize: function(targets)
	{
		tt.click(function(e){
			ToolTip.hold = false;
			tt.fadeOut("fast");
		})
		.appendTo("#maincanvas");

		var mclick= this.mclick,
		    mover = this.mover,
		    mout  = this.mout;

		targets
			.click(mclick)
			.mouseenter(mover)
			.mouseleave(mout);
	},

	mclick: function(e)
	{
		if ( ToolTip.hold ) return;
		ToolTip.hold = true;
	},

	mover: function(e)
	{
		if ( ToolTip.hold ) return;

		var tag = $(e.currentTarget);
		if ( !tag.is(".col_tag") ){
//console.log("over?> "+e.currentTarget.tagName+" ("+  e.currentTarget.id+")");
			return;
		}
		tag.css("z-index",3);

		var posi = getPosi(tag);
		tt.stop()					// If FadeOut is in progress, stop it
			.clearQueue()
			.modTooltip(tag)
			.css("left", posi.x+"px")
			.css("top",  posi.y+"px")
			.css("opacity",1)
			.show();
	},

	mout: function(e)
	{
		if ( ToolTip.hold ) return;

		var tag = $(e.currentTarget);
		if ( !tag.is(".col_tag") ){
//console.log("out?> "+e.currentTarget.tagName+" ("+  e.currentTarget.id+")");
			return;
		}
		tag.css("z-index",0);

		tt.fadeOut("fast");
	},

	dummy: ''
};


window.ToolTip = ToolTip;

})( window )
