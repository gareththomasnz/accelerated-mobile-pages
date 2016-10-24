( function( $ ) {
	'use strict';
 			$( document ).ready( function () {
					
					function ampforwp_design_controller(value) {
							switch (value) {
									case 'title:1':
											$('.ampforwp-title').show();
											$('.ampforwp-title').appendTo('.amp-wp-article');
											break;
									case 'meta_info:1':
											$('.ampforwp-meta-info').show();
											$('.ampforwp-meta-info').appendTo('.amp-wp-article');
											break;
									case 'featured_image:1':
											$('.amp-wp-article-featured-image').show();
											$('.amp-wp-article-featured-image').appendTo('.amp-wp-article');
											break;
									case 'content:1':
											$('.amp-wp-article-content').show();
											$('.amp-wp-article-content').appendTo('.amp-wp-article');
											break;
									case 'title:0':
											$('.ampforwp-title').hide();
											break;
									case 'meta_info:0':
											$('.ampforwp-meta-info').hide();
											break;
									case 'featured_image:0':
											$('.amp-wp-article-featured-image').hide();
											break;
									case 'content:0':
											$('.amp-wp-article-content').hide();
											break;
							}
					}
						
					// Default Settings for the customizer
					var ampforwp_dm_settings =	wp.customize.instance( 'fx_share[services]' ).get() 
					ampforwp_dm_settings = ampforwp_dm_settings.split(',');
						$.each(ampforwp_dm_settings, function (index, value) {
								ampforwp_design_controller(value);
						});					
							
					// Update the live settings
					wp.customize( 'fx_share[services]', function( value ){
						value.bind( function( to ) {
							var result = to.split(',');
							$.each(result, function (index, value) {
									ampforwp_design_controller(value);
							});
						} );
					} );
				
 		});
} )( jQuery );
