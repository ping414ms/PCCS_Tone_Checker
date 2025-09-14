/* =========================================================================
   initializer
   ------------------------------------------------------------------------- */
function initialize()
{
	var INTERVAL_SECS = 100;

	PCCSToneFig.initialize();
	PCCSToneFig.default_placing();

	// Switch of figure selector
	$("input[name='sel_fig']").each(function(){
		$(this).click(function(e){
			PCCSToneFig.switch_change_figure(this.id);
		});
	});

	// Switch of text of color label
	$("input[name='sel_labels']").each(function(){
		$(this).click(function(e){
			PCCSToneFig.switch_label(this.id);
		});
	});

	// Alternative tone switch
	$("#ck_tone_p").click(  function(){ PCCSToneFig.switch_alttone() });
	$("#ck_tone_lt").click( function(){ PCCSToneFig.switch_alttone() });
	$("#ck_tone_s").click(  function(){ PCCSToneFig.switch_alttone() });

	// tooltip
	ToolTip.initialize($("div.col_tag"));

	// Color label
	$("div.col_tag *").each(function(){
		$(this).css("cursor", "pointer");
	});


	// interval process
	(function (){
		PCCSToneFig.draw();
		setTimeout(arguments.callee, INTERVAL_SECS);
	})();
}

