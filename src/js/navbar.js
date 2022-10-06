import $ from "jquery";
import * as focusTrap from "focus-trap";

export const setup = () => {
    const navbar = $("#navbarContainer");
    const overlay = $("#navbarOverlay");

    const trap = focusTrap.createFocusTrap(navbar.get(), {});

    $("#openNavbarButton").on("click", () => {
        navbar.removeClass("hidden");
        overlay.removeClass("hidden");
        navbar.attr("aria-hidden", "false");

        trap.activate();
    });

    $("#closeNavbarButton").on("click", () => {
        navbar.addClass("hidden");
        overlay.addClass("hidden");
        navbar.attr("aria-hidden", "true");

        trap.pause();
    });
};
