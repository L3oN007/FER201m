/*
Author       : Dreamguys
Template Name: Doccure - Bootstrap Template
Version      : 1.0
*/

(function($) {
    "use strict";
	
	// Stick Sidebar
	
	if ($(window).width() > 767) {
		if($('.theiaStickySidebar').length > 0) {
			$('.theiaStickySidebar').theiaStickySidebar({
			  // Settings
			  additionalMarginTop: 30
			});
		}
	}
	
// Sidebar
	if($(window).width() <= 991){
	var Sidemenu = function() {
		this.$menuItem = $('.main-nav a');
	};
	
	function init() {
		var $this = Sidemenu;
		$('.main-nav a').on('click', function(e) {
			if($(this).parent().hasClass('has-submenu')) {
				e.preventDefault();
			}
			if(!$(this).hasClass('submenu')) {
				$('ul', $(this).parents('ul:first')).slideUp(350);
				$('a', $(this).parents('ul:first')).removeClass('submenu');
				$(this).next('ul').slideDown(350);
				$(this).addClass('submenu');
			} else if($(this).hasClass('submenu')) {
				$(this).removeClass('submenu');
				$(this).next('ul').slideUp(350);
			}
		});
		//$('.main-nav li.has-submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');
	}

	// Sidebar Initiate
	init();
	}
	
	// Textarea Text Count
	
	var maxLength = 100;
	$('#review_desc').on('keyup change', function () {
		var length = $(this).val().length;
		 length = maxLength-length;
		$('#chars').text(length);
	});
	
	// Select 2
	
	if($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}
	
	// Date Time Picker
	
	if($('.datetimepicker').length > 0) {
		$('.datetimepicker').datetimepicker({
			format: 'DD/MM/YYYY',
			icons: {
				up: "fas fa-chevron-up",
				down: "fas fa-chevron-down",
				next: 'fas fa-chevron-right',
				previous: 'fas fa-chevron-left'
			}
		});
	}
	
	// Fancybox Gallery
	
	if($('.clinic-gallery a').length > 0) {
		$('.clinic-gallery a').fancybox({
			buttons: [
				"thumbs",
				"close"
			],
		});	
	}
	
	// Floating Label

	if($('.floating').length > 0 ){
		$('.floating').on('focus blur', function (e) {
		$(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
		}).trigger('blur');
	}
	
	// Mobile menu sidebar overlay
	
	$('body').append('<div class="sidebar-overlay"></div>');
	$(document).on('click', '#mobile_btn', function() {
		$('main-wrapper').toggleClass('slide-nav');
		$('.sidebar-overlay').toggleClass('opened');
		$('html').addClass('menu-opened');
		return false;
	});
	
	$(document).on('click', '.sidebar-overlay', function() {
		$('html').removeClass('menu-opened');
		$(this).removeClass('opened');
		$('main-wrapper').removeClass('slide-nav');
	});
	
	$(document).on('click', '#menu_close', function() {
		$('html').removeClass('menu-opened');
		$('.sidebar-overlay').removeClass('opened');
		$('main-wrapper').removeClass('slide-nav');
	});
	
	// Mobile Menu
	
	/*if($(window).width() <= 991){
		mobileSidebar();
	} else {
		$('html').removeClass('menu-opened');
	}*/
	
	/*function mobileSidebar() {
		$('.main-nav a').on('click', function(e) {
			$('.dropdown-menu').each(function() {
			  if($(this).hasClass('show')) {
				  $(this).slideUp(350);
			  }
			});
			if(!$(this).next('.dropdown-menu').hasClass('show')) {
				$(this).next('.dropdown-menu').slideDown(350);
			}
			
		});
	}*/
	
	// Tooltip
	
	if($('[data-toggle="tooltip"]').length > 0 ){
		$('[data-toggle="tooltip"]').tooltip();
	}
	
	// Add More Hours
	
    $(".hours-info").on('click','.trash', function () {
		$(this).closest('.hours-cont').remove();
		return false;
    });

    $(".add-hours").on('click', function () {
		
		var hourscontent = '<div class="row form-row hours-cont">' +
			'<div class="col-12 col-md-10">' +
				'<div class="row form-row">' +
					'<div class="col-12 col-md-6">' +
						'<div class="form-group">' +
							'<label>Start Time</label>' +
							'<select class="form-control">' +
								'<option>-</option>' +
								'<option>12.00 am</option>' +
								'<option>12.30 am</option>' + 
								'<option>1.00 am</option>' +
								'<option>1.30 am</option>' +
							'</select>' +
						'</div>' +
					'</div>' +
					'<div class="col-12 col-md-6">' +
						'<div class="form-group">' +
							'<label>End Time</label>' +
							'<select class="form-control">' +
								'<option>-</option>' +
								'<option>12.00 am</option>' +
								'<option>12.30 am</option>' +
								'<option>1.00 am</option>' +
								'<option>1.30 am</option>' +
							'</select>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>' +
			'<div class="col-12 col-md-2"><label class="d-md-block d-sm-none d-none">&nbsp;</label><a href="#" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a></div>' +
		'</div>';
		
        $(".hours-info").append(hourscontent);
        return false;
    });
	
	// Content div min height set
	
	function resizeInnerDiv() {
		var height = $(window).height();	
		var header_height = $(".header").height();
		var footer_height = $(".footer").height();
		var setheight = height - header_height;
		var trueheight = setheight - footer_height;
		$(".content").css("min-height", trueheight);
	}
	
	if($('.content').length > 0 ){
		resizeInnerDiv();
	}

	$(window).resize(function(){
		if($('.content').length > 0 ){
			resizeInnerDiv();
		}
		/*if($(window).width() <= 991){
			mobileSidebar();
		} else {
			$('html').removeClass('menu-opened');
		}*/
	});
	
	// Slick Slider
	
	if($('.specialities-slider').length > 0) {
		$('.specialities-slider').slick({
			dots: true,
			autoplay:false,
			infinite: true,
			variableWidth: true,
			prevArrow: false,
			nextArrow: false
		});
	}
	
	if($('.doctor-slider').length > 0) {
		$('.doctor-slider').slick({
			dots: false,
			autoplay:false,
			infinite:false,		
			swipe: true,
			variableWidth: true,
			// draggable: true,
			slidesToScroll: 2,
			arrows: true,
			initialSlide: 0


		});
	}
	if($('.features-slider').length > 0) {
		$('.features-slider').slick({
			dots: true,
			infinite: true,
			centerMode: true,
			slidesToShow: 3,
			speed: 500,
			variableWidth: true,
			arrows: false,
			autoplay:false,
			responsive: [{
				  breakpoint: 992,
				  settings: {
					slidesToShow: 1
				  }

			}]
		});
	}
	
	// Date Time Picker
	
	if($('.datepicker').length > 0) {
		$('.datepicker').datetimepicker({
			viewMode: 'years',
			showTodayButton: true,
			format: 'DD-MM-YYYY',
			// minDate:new Date(),
			widgetPositioning:{
				horizontal: 'auto',	
				vertical: 'bottom'
			}
		});
	}
	
	// Chat

	var chatAppTarget = $('.chat-window');
	(function() {
		if ($(window).width() > 991)
			chatAppTarget.removeClass('chat-slide');
		
		$(document).on("click",".chat-window .chat-users-list a.media",function () {
			if ($(window).width() <= 991) {
				chatAppTarget.addClass('chat-slide');
			}
			return false;
		});
		$(document).on("click","#back_user_list",function () {
			if ($(window).width() <= 991) {
				chatAppTarget.removeClass('chat-slide');
			}	
			return false;
		});
	})();
	
	// Circle Progress Bar
	
	function animateElements() {
		$('.circle-bar1').each(function () {
			var elementPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			var percent = $(this).find('.circle-graph1').attr('data-percent');
			var animate = $(this).data('animate');
			if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
				$(this).data('animate', true);
				$(this).find('.circle-graph1').circleProgress({
					value: percent / 100,
					size : 400,
					thickness: 30,
					fill: {
						color: '#da3f81'
					}
				});
			}
		});
		$('.circle-bar2').each(function () {
			var elementPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			var percent = $(this).find('.circle-graph2').attr('data-percent');
			var animate = $(this).data('animate');
			if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
				$(this).data('animate', true);
				$(this).find('.circle-graph2').circleProgress({
					value: percent / 100,
					size : 400,
					thickness: 30,
					fill: {
						color: '#68dda9'
					}
				});
			}
		});
		$('.circle-bar3').each(function () {
			var elementPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			var percent = $(this).find('.circle-graph3').attr('data-percent');
			var animate = $(this).data('animate');
			if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
				$(this).data('animate', true);
				$(this).find('.circle-graph3').circleProgress({
					value: percent / 100,
					size : 400,
					thickness: 30,
					fill: {
						color: '#1b5a90'
					}
				});
			}
		});
	}	
	
	if($('.circle-bar').length > 0) {
		animateElements();
	}
	$(window).scroll(animateElements);
	
})(jQuery);

$(document).ready(function() {
	// When the user selects a specialty
	$("#specialty-selector").on("change", function() {
	  var selectedSpecialty = $(this).val();
	  
	  if(selectedSpecialty == 'general'){
		
		$(".doctor-slider").slick('slickUnfilter');
		
		$(".doctor-slider").slick('slickFilter','.general');
		$('.doctor-slider').slick({			
			infinite: false
		});
	  }
	  else if(selectedSpecialty == 'surgery'){
		$(".slider").slick('slickUnfilter');
		$(".slider").slick('slickFilter','.surgery');
		$('.doctor-slider').slick({			
			infinite: false
		});
	  }
	  else if(selectedSpecialty == 'imaging'){
		$(".slider").slick('slickUnfilter');
		$(".slider").slick('slickFilter','.imaging');
		$('.doctor-slider').slick({			
			infinite: false
		});
	  }
	  else if(selectedSpecialty == 'nutrition'){
		$(".slider").slick('slickUnfilter');
		$(".slider").slick('slickFilter','.nutrition');
		$('.doctor-slider').slick({			
			infinite: false
		});
	  }
	  else if(selectedSpecialty == 'genetics'){
		$(".slider").slick('slickUnfilter');
		$(".slider").slick('slickFilter','.genetics');
		$('.doctor-slider').slick({			
			infinite: false
		});
	  }
	  else if(selectedSpecialty == 'all'){
		
		$(".slider").slick('slickUnfilter');
		$('.doctor-slider').slick({			
			infinite: true
		});
	  }
	});
  });

// Filter doctor by specialty
// $(document).ready(function() {
// 	// When the specialty selector changes
// 	$('#specialty-selector').on('change', function() {
// 	  var selectedSpecialty = $(this).val();
	  
// 	  // Show all doctors if no specialty is selected
// 	  if (selectedSpecialty === '') {
// 		$('.profile-widget').show();
// 	  } else {
// 		// Filter the doctors by specialty and show only those that match
// 		$('.profile-widget').filter(function() {
// 		  return $(this).data('specialty') === selectedSpecialty;
// 		}).show();
		
// 		// Hide the doctors that don't match
// 		$('.profile-widget').not('[data-specialty="' + selectedSpecialty + '"]').hide();
// 	  }
// 	});
//   });
  

// prescription
(function($, window, document, undefined) {
	var pluginName = "editable",
	  defaults = {
		keyboard: true,
		dblclick: true,
		button: true,
		buttonSelector: ".edit",
		maintainWidth: true,
		dropdowns: {},
		edit: function() {},
		save: function() {},
		cancel: function() {}
	  };
  
	function editable(element, options) {
	  this.element = element;
	  this.options = $.extend({}, defaults, options);
  
	  this._defaults = defaults;
	  this._name = pluginName;
  
	  this.init();
	}
  
	editable.prototype = {
	  init: function() {
		this.editing = false;
  
		if (this.options.dblclick) {
		  $(this.element)
			.css('cursor', 'pointer')
			.bind('dblclick', this.toggle.bind(this));
		}
  
		if (this.options.button) {
		  $(this.options.buttonSelector, this.element)
			.bind('click', this.toggle.bind(this));
		}
	  },
  
	  toggle: function(e) {
		e.preventDefault();
  
		this.editing = !this.editing;
  
		if (this.editing) {
		  this.edit();
		} else {
		  this.save();
		}
	  },
  
	  edit: function() {
		var instance = this,
		  values = {};
  
		$('td[data-field]', this.element).each(function() {
		  var input,
			field = $(this).data('field'),
			value = $(this).text(),
			width = $(this).width();
  
		  values[field] = value;
  
		  $(this).empty();
  
		  if (instance.options.maintainWidth) {
			$(this).width(width);
		  }
  
		  if (field in instance.options.dropdowns) {
			input = $('<select></select>');
  
			for (var i = 0; i < instance.options.dropdowns[field].length; i++) {
			  $('<option></option>')
				.text(instance.options.dropdowns[field][i])
				.appendTo(input);
			};
  
			input.val(value)
			  .data('old-value', value)
			  .dblclick(instance._captureEvent);
		  } 
		//   if(instance.options.){}
			else {
			input = $('<input type="text" />')
			  .val(value)
			  .data('old-value', value)
			  .dblclick(instance._captureEvent);
		  }
  
		  input.appendTo(this);
  
		  if (instance.options.keyboard) {
			input.keydown(instance._captureKey.bind(instance));
		  }
		});
  
		this.options.edit.bind(this.element)(values);
	  },
  
	  save: function() {
		var instance = this,
		  values = {};
  
		$('td[data-field]', this.element).each(function() {
		  var value = $(':input', this).val();
  
		  values[$(this).data('field')] = value;
  
		  $(this).empty()
			.text(value);
		});
  
		this.options.save.bind(this.element)(values);
	  },
  
	  cancel: function() {
		var instance = this,
		  values = {};
  
		$('td[data-field]', this.element).each(function() {
		  var value = $(':input', this).data('old-value');
  
		  values[$(this).data('field')] = value;
  
		  $(this).empty()
			.text(value);
		});
  
		this.options.cancel.bind(this.element)(values);
	  },
  
	  _captureEvent: function(e) {
		e.stopPropagation();
	  },
  
	  _captureKey: function(e) {
		if (e.which === 13) {
		  this.editing = false;
		  this.save();
		} else if (e.which === 27) {
		  this.editing = false;
		  this.cancel();
		}
	  }
	};
  
	$.fn[pluginName] = function(options) {
	  return this.each(function() {
		if (!$.data(this, "plugin_" + pluginName)) {
		  $.data(this, "plugin_" + pluginName,
			new editable(this, options));
		}
	  });
	};
  
  })(jQuery, window, document);
  
  editTable();
  
  //custome editable starts
  function editTable(){
	
	$(function() {
	var pickers = {};
  
	$('table tr').editable({
	  dropdowns: {
		sex: ['Male', 'Female']
	  },
	  edit: function(values) {
		$(".edit i", this)
		  .removeClass('fa-pencil')
		  .addClass('fa-save')
		  .attr('title', 'Save');
  
		pickers[this] = new Pikaday({
		  field: $("td[data-field=birthday] input", this)[0],
		  format: 'MMM D, YYYY'
		});
	  },
	  save: function(values) {
		$(".edit i", this)
		  .removeClass('fa-save')
		  .addClass('fa-pencil')
		  .attr('title', 'Edit');
  
		if (this in pickers) {
		  pickers[this].destroy();
		  delete pickers[this];
		}
	  },
	  cancel: function(values) {
		$(".edit i", this)
		  .removeClass('fa-save')
		  .addClass('fa-pencil')
		  .attr('title', 'Edit');
  
		if (this in pickers) {
		  pickers[this].destroy();
		  delete pickers[this];
		}
	  }
	});
  });
	
  }
  
  $(".add-row").click(function(){
	$("#editableTable").find("tbody tr:first").before("<tr><td data-field='name'></td><td data-field='name'></td><td data-field='name'></td><td data-field='name'></td><td><a class='button button-small edit' title='Edit'><i class='fa fa-pencil'></i></a> <a class='button button-small' title='Delete'><i class='fa fa-trash'></i></a></td></tr>");   
	editTable();  
	setTimeout(function(){   
	  $("#editableTable").find("tbody tr:first td:last a[title='Edit']").click(); 
	}, 200); 
	
	setTimeout(function(){ 
	  $("#editableTable").find("tbody tr:first td:first input[type='text']").focus();
		}, 300); 
	
	 $("#editableTable").find("a[title='Delete']").unbind('click').click(function(e){
		  $(this).closest("tr").remove();
	  });
	 
  });
  
  function myFunction() {
	  
  }
  
  $("#editableTable").find("a[title='Delete']").click(function(e){  
	var x;
	  if (confirm("Are you sure you want to delete entire row?") == true) {
		  $(this).closest("tr").remove();
	  } else {
		  
	  }     
  });
  
  // Define dictionary of medicines
  // Define dictionary of medicines
const medicines = [
	"aspirin",
	"ibuprofen",
	"acetaminophen",
	"naproxen",
	"diclofenac",
	"meloxicam",
	"celecoxib",
	"indomethacin",
	"etodolac",
	"ketoprofen",
	"piroxicam",
	"nabumetone",
	"sulindac",
	"mefenamic acid",
	"diflunisal",
	"tolmetin",
	"oxaprozin",
	"fenoprofen",
	"meclomen",
	"flurbiprofen",
	"tenoxicam",
	"nimesulide",
	"rofecoxib",
	"valdecoxib",
	"lumiracoxib",
	"parecoxib",
	"propyphenazone",
	"carprofen",
	"firocoxib",
	"grapiprant"
  ];
  
  // Get the form and input element
  const form = document.getElementById('medicine-form');
  const input = document.getElementById('medicine-input');
  const resultsContainer = document.getElementById('results-container');
  
  // Function to show matching results
  function showResults(matches) {
	// Clear the previous results
	resultsContainer.innerHTML = '';
	if (matches.length > 0) {
	  // Display the container if there are matches
	  resultsContainer.style.display = 'block';
	  // Create a div for each match
	  for (let i = 0; i < matches.length; i++) {
		const resultDiv = document.createElement('div');
		resultDiv.classList.add('result-item');
		resultDiv.textContent = matches[i];
		// Add click event listener to select the medicine and hide the container
		resultDiv.addEventListener('click', () => {
		  input.value = matches[i];
		  resultsContainer.style.display = 'none';
		});
		// Append the div to the results container
		resultsContainer.appendChild(resultDiv);
	  }
	} else {
	  // Hide the container if there are no matches
	  resultsContainer.style.display = 'none';
	}
  }
  
  // Add event listeners to the input field
  input.addEventListener('input', () => {
	// Get the input value and search for matches
	const medicineInput = input.value.toLowerCase();
	const matches = [];
	for (let i = 0; i < medicines.length; i++) {
	  const medicine = medicines[i];
	  if (medicine.includes(medicineInput)) {
		matches.push(medicine);
	  }
	}
	// Show the matching results
	showResults(matches);
  
	// Check if there is only one exact match and update the input field and container
	if (matches.length === 1 && matches[0].toLowerCase() === medicineInput) {
	  input.value = matches[0];
	  resultsContainer.style.display = 'none';
	}
  });
  
  input.addEventListener('focusout', () => {
	// Hide the results container when the input field loses focus
	resultsContainer.style.display = 'none';
  });
  
  // Add event listener to form submit
  form.addEventListener('submit', (event) => {
	// Prevent default form submission behavior
	event.preventDefault();
  
	// Get the input value
	const medicineInput = input.value.toLowerCase();
  
	// Check if the medicine exists in the dictionary
	if (medicines.includes(medicineInput)) {
	  // Display medicine information
	  alert(medicineInput);
	} else {
	  // Display error message
	  alert(`Sorry, we could not find '${medicineInput}' in our database.`);
	}
  });
  
// prescription