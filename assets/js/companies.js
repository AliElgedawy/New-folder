document.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get('id');

    loadContent(id);
});

function loadContent(id) {

    var title = document.getElementById('details-title');
    var content = document.getElementById('companyContent');
        var serviceImage = document.getElementById('CompanyImage');

    if (id == "ConstructionCompany") {
        title.innerHTML = '<span data-lang="ConstructionHeader"></span>';
        content.innerHTML = '<span data-lang="ConstructionTotalContent"></span>';
        serviceImage.innerHTML = '<img class="img-fluid  ml-5 "  src="./assets/images/AMHZCompanies/Construction.png" alt="AMH LOGO">';

      
    } else if (id == "AgriculturalCompany") {
        title.innerHTML = '<span data-lang="AgriculturalHeader"></span>';
        content.innerHTML = '<span data-lang="AgriculturalTotalContent"></span>';
        serviceImage.innerHTML = '<img class="img-fluid  ml-5 "  src="./assets/images/AMHZCompanies/amz_agric_logo.png" alt="AMH LOGO">';

    }
    else if (id == "ImportExportCompany") {
        title.innerHTML = '<span data-lang="ImportExportHeading"></span>';
        content.innerHTML = '<span data-lang="ImportExportTotalContent"></span>';
        serviceImage.innerHTML = '<img class="img-fluid  ml-5 "  src="./assets/images/AMHZCompanies/amh_import_final.png" alt="AMH LOGO">';

    }
    else if (id == "TechnologyCompany") {
        title.innerHTML = '<span data-lang="TechnologyHeading"></span>';
        content.innerHTML = '<span data-lang="TechnologyTotalContent"></span>';
        serviceImage.innerHTML = '<img class="img-fluid  ml-5 "  src="./assets/images/AMHZCompanies/ahm_tech .png" alt="AMH LOGO">';


    }
    else if (id == "MedicalCompany") {
        title.innerHTML = '<span data-lang="MedicalHeading"></span>';
        content.innerHTML = '<span data-lang="MedicalTotalContent"></span>';
        serviceImage.innerHTML = '<img class="img-fluid  ml-5 "  src="./assets/images/AMHZCompanies/amz_medical.png" alt="AMH LOGO">';

    }

}
