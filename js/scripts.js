/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Dynamic experience count
    function experienceCountInMonths(startDate, endDate) {
        // Splitting the dates into month and year components
        let [startMonth, startYear] = startDate.split("/");
        let [endMonth, endYear] = endDate.split("/");

        // Parsing month and year components as integers
        startMonth = parseInt(startMonth);
        startYear = parseInt(startYear);
        endMonth = parseInt(endMonth);
        endYear = parseInt(endYear); // Calculating the total month count

        const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth);

        return totalMonths;
    }

    function experienceCountInYears(month) {
        if (month < 1) {
            return "Invalid month. Month should be greater than or equal to 1.";
        }

        const yearCount = Math.floor(month / 12);
        const remainingMonths = month % 12 === 0 ? "" : `.${month % 12}`;

        return `${yearCount}${remainingMonths}`;
    }

    function getTotalExperienceCount() {
        const startDate = new Date(['2022', '06']); // [Year, Month]
        const currentDate = new Date();

        const formatedStartDate = `${startDate.getMonth()} / ${startDate.getFullYear()}`;
        const formatedCurrentDate = `${currentDate.getMonth() + 1} / ${currentDate.getFullYear()}`;

        const totalMonths = experienceCountInMonths(formatedStartDate, formatedCurrentDate);

        return experienceCountInYears(totalMonths);
    }

    $('#total__experience').html(getTotalExperienceCount());
});
