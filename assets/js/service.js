document.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get('id');

    loadContent(id);
});

function loadContent(id) {

    var title = document.getElementById('details-title');
    var content = document.getElementById('content');
        var serviceImage = document.getElementById('serviceImage');

    var ContractingServicesItems = [
        ['item1', 'item1Contracting'],
        ['item2', 'item2Contracting'],
        ['item3', 'item3Contracting'],
        ['item4', 'item4Contracting'],
        ['item5', 'item5Contracting'],
        ['item6', 'item6Contracting']
    ];
    var AgriculturalServicesItems = [
        ['item1', 'item1Agricultural'],
        ['item2', 'item2Agricultural'],
        ['item3', 'item3Agricultural'],
        ['item4', 'item4Agricultural'],
        ['item5', 'item5Agricultural'],
        ['item6', 'item6Agricultural'],
        ['item7', 'item7Agricultural'],
    ];
    var ImportAndExportServicesItems = [
        ['item1', 'item1ImportExport'],
        ['item2', 'item2ImportExport'],
        ['item3', 'item3ImportExport'],
        ['item4', 'item4ImportExport'],
        ['item5', 'item5ImportExport'],
        ['item6', 'item6ImportExport'],
        ['item7', 'item7ImportExport'],
        ['item8', 'item8ImportExport'],
        ['item9', 'item9ImportExport'],
    ];
    var TechnologyServicesItems = [
        ['item1', 'item1Technology'],
        ['item2', 'item2Technology'],
        ['item3', 'item3Technology'],
    ];
    var MedicalServicesItems = [
        ['item1', 'item1Medical'],
        ['item2', 'item2Medical'],
        ['item3', 'item3Medical'],
        ['item4', 'item4Medical'],
    ];
    // استخدام الترجمات بناءً على اللغة المحددة
    if (id == "Contracting") {
        title.innerHTML = '<span data-lang="ContractingServices"></span>';
        content.innerHTML = '<span data-lang="contentContracting"></span>';
        serviceImage.innerHTML = '<img class="img-fluid  ml-5 " id="" src="./assets/images/hero/AMH/construction.png" alt="AMH LOGO">';
            var itemsData = document.getElementById("itemsList");
        ContractingServicesItems.forEach(element => {
            itemsData.innerHTML += `  <li id="${element[0]}" class="list-item"><span data-lang="${element[1]}"></span> </li>`
        });
    } else if (id == "Agricultural") {
        title.innerHTML = '<span data-lang="AgriculturalServices"></span>';
        content.innerHTML = '<span data-lang="contentAgricultural"></span>';
        serviceImage.innerHTML = '<img class="img-fluid  ml-5 " id="" src="./assets/images/hero/AMH/Agricultural.png" alt="AMH LOGO">';
        var itemsData = document.getElementById("itemsList");

        AgriculturalServicesItems.forEach(element => {
            itemsData.innerHTML += `  <li id="${element[0]}" class="list-item"><span data-lang="${element[1]}"></span> </li>`
        });
            
    }
    else if (id == "ImportExport") {
        title.innerHTML = '<span data-lang="ImportExportServices"></span>';
        content.innerHTML = '<span data-lang="ImportAndExportContent"></span>';
        serviceImage.innerHTML = '<img class="img-fluid  ml-5 " id="" src="./assets/images/hero/AMH/ImportAndExport.png" alt="AMH LOGO">';
        var itemsData = document.getElementById("itemsList");

        ImportAndExportServicesItems.forEach(element => {
            itemsData.innerHTML += `  <li id="${element[0]}" class="list-item"><span data-lang="${element[1]}"></span> </li>`

        });
       
    }
    else if (id == "Technology") {
        title.innerHTML = '<span data-lang="TechnologyServices"></span>';
        content.innerHTML = '<span data-lang="TechnologyContent"></span>';
        serviceImage.innerHTML = '<img class="img-fluid  ml-5 " id="" src="./assets/images/hero/AMH/Technology.png" alt="AMH LOGO">';
        var itemsData = document.getElementById("itemsList");

        TechnologyServicesItems.forEach(element=>{
            itemsData.innerHTML += `  <li id="${element[0]}" class="list-item"><span data-lang="${element[1]}"></span> </li>`

        });
      
    }
    else if (id == "Medical") {
        title.innerHTML = '<span data-lang="MedicalServices"></span>';
        content.innerHTML = '<span data-lang="MedicalContent"></span>';
        serviceImage.innerHTML = '<img class="img-fluid  ml-5 " id="" src="./assets/images/hero/AMH/Medical.png" alt="AMH LOGO">';
        var itemsData = document.getElementById("itemsList");

        MedicalServicesItems.forEach(element=>{
            itemsData.innerHTML += `  <li id="${element[0]}" class="list-item"><span data-lang="${element[1]}"></span> </li>`

        })
        
    }

}
