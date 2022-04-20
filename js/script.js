$(function () {
    // let url = $(location).attr("href");
    // switch (url) {
    //     case "http://127.0.0.1:5500/index.html":
    //         $("#list-Component").addClass("hide");
    //         $("#Registration-Component").addClass("hide");
    //         break;
    //     case "http://127.0.0.1:5500/index.html#Students":
    //         $("#list-Component").removeClass("hide");
    //         $("#Registration-Component").addClass("hide");
    //         break;
    //     case "http://127.0.0.1:5500/index.html#Registration":
    //         $("#list-Component").addClass("hide");
    //         $("#Registration-Component").removeClass("hide");
    //         break;
    // }

    $("#inputRegistration3, .myradio, .mydrop, .mycheck").change(function () {
        handleValidation();
    });

    $(".submit-btn").click(function () {
        handleValidation();
    });

    loadStudents();
});

const handleValidation = () => {
    var allowed = /^[0-9a-zA-Z_-]+$/;
    if ($("#inputRegistration3").val().match(allowed)) {
        $(".regis .invalid-feedback").removeClass("show");
    } else {
        $(".regis .invalid-feedback").addClass("show");
    }
    if ($(".form-check .form-check-input[type='checkbox']").is(":checked")) {
        $(".mycheck .invalid-feedback").removeClass("show");
    } else {
        $(".mycheck .invalid-feedback").addClass("show");
    }
    if ($(".form-check .form-check-input[type='radio']").is(":checked")) {
        $(".myradio .invalid-feedback").removeClass("show");
    } else {
        $(".myradio .invalid-feedback").addClass("show");
    }
    if (
        $(".form-select").children("option:selected").val() !== "Select Program"
    ) {
        $(".mydrop .invalid-feedback").removeClass("show");
    } else {
        $(".mydrop .invalid-feedback").addClass("show");
    }
    if (!$("div").is(".invalid-feedback.show")) {
        $(".submit-btn").removeAttr("disabled");
    }
};

function loadStudents() {
    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:5500/Model/students.json",
        success: function (response) {
            for (let i = 0; i < response.length; i++) {
                $("tbody").append(`
                    <tr>
                         <th scope="row">${response[i].RegistrationId}</th>
                            <td>${response[i].Program}</td>
                                <td>${response[i].Gender}</td>
                                <td>${response[i].PreferredDate}</td>
                    </tr>
            `);
            }
        },
    });
}
