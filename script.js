// Map
$('#world-map').vectorMap({
    backgroundColor: '#fff',
    hoverOpacity: 0.7,
    hoverColor: false,
    color: '#aaaaaa',
    regionStyle: {
      initial: {
        fill: 'rgba(66, 133, 244, 0.2)'
      }
    },
    series: {
      regions: [{
        values: {
          DE: 'rgba(66, 133, 244, 0.3)',
          BR: 'rgba(66, 133, 244, 0.4)',
          EG: 'rgba(66, 133, 244, 0.5)',
          IN: 'rgba(66, 133, 244, 0.6)',
          DK: 'rgba(66, 133, 244, 0.7)',
          PL: 'rgba(66, 133, 244, 0.8)',
          IQ: 'rgba(66, 133, 244, 0.9)',
          PK: 'rgba(66, 133, 244, 1)',
          RU: 'rgba(66, 133, 244, 0.9)',
          CN: 'rgba(66, 133, 244, 0.5)',
          AU: 'rgba(66, 133, 244, 0.2)',
          AR: 'rgba(66, 133, 244, 0.2)',
          FR: 'rgba(66, 133, 244, 0.2)',
          NG: 'rgba(66, 133, 244, 0.2)',
          CA: 'rgba(66, 133, 244, 0.2)',
          US: 'rgba(66, 133, 244, 1)',
        }
      }]
    }
  });
  
  // Select initialization
  $(document).ready(function () {
    $('.mdb-select').materialSelect();
    $('.select-wrapper.md-form.md-outline input.select-dropdown').bind('focus blur', function () {
      $(this).closest('.select-outline').find('label').toggleClass('active');
      $(this).closest('.select-outline').find('.caret').toggleClass('active');
    });
  });
  
  // Date Picker Initialization
  $('.datepicker').pickadate();


  


  












  
        






















  