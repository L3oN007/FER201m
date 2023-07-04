$(document).ready(function () {
    $('.select2input').select2({
        templateResult: formatOption,
        templateSelection: formatSelection
    });
});

function formatOption(option) {
    if (!option.id) {
        return option.text;
    }

    var icon = $(option.element).data('icon');
    var $option = $(
        '<span><img src="' + icon + '" class="img-flag" /> ' + option.text + '</span>'
    );

    return $option;
}

function formatSelection(option) {
    if (!option.id) {
        return option.text;
    }

    var icon = $(option.element).data('icon');
    var $selectedOption = $(
        '<span class="selected-image"><img src="' + icon + '" class="img-flag" /> ' + option.text + '</span>'
    );

    return $selectedOption;
}