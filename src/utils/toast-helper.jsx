import Swal from "sweetalert2";

export const Toast = Swal.mixin({
    position: "top",
    toast: true,
    timer: 1500,
    showConfirmButton: false,
});

export const InputConfirmation = Swal.mixin({
    icon: "question",
    customClass: {
        confirmButton: "me-1",
        cancelButton: "ms-1",
        title: "fs-4",
    },
    buttonsStyling: false,
    showCancelButton: true,
    confirmButtonText: "Submit",
    cancelButtonText: "Cancel",
});