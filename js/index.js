// Luis Rafael Coronado - 2020-10295

// VARIABLES
const btnClean = document.getElementById("btnClean");
const btnGenerate = document.getElementById("btnStart");


// EVENTS
btnClean.addEventListener("click", clean);
btnGenerate.addEventListener("click", function() {
    let inputName = document.getElementById("inputName").value;
    let inputMail = document.getElementById("inputMail").value;
    let inputAddress = document.getElementById("inputAddress").value;
    let inputSummary = document.getElementById("inputSummary").value;
    let inputPhone = document.getElementById("inputPhone").value;
    let inputWebsite = document.getElementById("inputWebsite").value;
    let inputLanguage = document.getElementById("inputLanguage").value;
    let inputWorkExperience = document.getElementById("inputWorkExperience").value;
    let inputEducation = document.getElementById("inputEducation").value;
    let inputSkills = document.getElementById("inputSkills").value;
    let inputCertifications = document.getElementById("inputCertifications").value;


    if (validate(inputName, inputMail, inputAddress, inputSummary, inputPhone, inputWebsite, inputLanguage, inputWorkExperience, inputEducation, inputSkills, inputCertifications) == true) {
        generateCV(inputName, inputMail, inputAddress, inputSummary, inputPhone, inputWebsite, inputLanguage, inputWorkExperience, inputEducation, inputSkills, inputCertifications);
        setValidation(true);
        let wm = document.getElementById("warningMessage");
        wm.innerHTML = "";
    } else {
        setValidation(false);
        let wm = document.getElementById("warningMessage");
        let Title = document.createElement("h1");
        Title.classList.add("text-center");
        Title.classList.add("text-danger");
        Title.innerText = "You should fill all the inputs.";
        wm.appendChild(Title);

    }
})

// FUNCTIONS
function clean() {
    document.getElementById("inputName").value = "";
    document.getElementById("inputMail").value = "";
    document.getElementById("inputAddress").value = "";
    document.getElementById("inputSummary").value = "";
    document.getElementById("inputPhone").value = "";
    document.getElementById("inputWebsite").value = "";
    document.getElementById("inputLanguage").value = "";
    document.getElementById("inputWorkExperience").value = "";
    document.getElementById("inputEducation").value = "";
    document.getElementById("inputSkills").value = "";
    document.getElementById("inputCertifications").value = "";
}

function validate(inputName, inputMail, inputAddress, inputSummary, inputPhone, inputWebsite, inputLanguage, inputWorkExperience, inputEducation, inputSkills, inputCertifications) {
    if (inputName == "" || inputName == undefined || inputName == null) { return false; }
    if (inputMail == "" || inputMail == undefined || inputMail == null) { return false; }
    if (inputAddress == "" || inputAddress == undefined || inputAddress == null) { return false; }
    if (inputSummary == "" || inputSummary == undefined || inputSummary == null) { return false; }
    if (inputPhone == "" || inputPhone == undefined || inputPhone == null) { return false; }
    if (inputLanguage == "" || inputLanguage == undefined || inputLanguage == null) { return false; }
    if (inputWebsite == "" || inputWebsite == undefined || inputWebsite == null) { return false; }
    if (inputWorkExperience == "" || inputWorkExperience == undefined || inputWorkExperience == null) { return false; }
    if (inputEducation == "" || inputEducation == undefined || inputEducation == null) { return false; }
    if (inputSkills == "" || inputSkills == undefined || inputSkills == null) { return false; }
    if (inputCertifications == "" || inputCertifications == undefined || inputCertifications == null) { return false; }

    return true;
}

function generateCV(valinputName, valinputMail, valinputAddress, valinputSummary,
    valinputPhone, valinputWebsite, valinputLanguage, valinputWorkExperience,
    valinputEducation, valinputSkills, valinputCertifications) {

    let Name = valinputName;
    let Mail = valinputMail;
    let Address = valinputAddress;
    let Summary = valinputSummary;
    let Phone = valinputPhone;
    let Website = valinputWebsite;
    let Languages = valinputLanguage.split(",");
    let WorkExperience = valinputWorkExperience.split(",");
    let Education = valinputEducation.split(",");
    let Skills = valinputSkills.split(",");
    let Certifications = valinputCertifications.split(",");

    let cvContainer = document.getElementById("cvContainer");
    let cardBody = document.createElement("div");
    cardBody.setAttribute("style", "padding:50px;");
    cardBody.setAttribute("id", "CV");


    /// FRIST ROW 
    let Design1 = document.createElement("div");
    Design1.classList.add("row");

    let colBG1 = document.createElement("div");
    colBG1.setAttribute("style", "height: 60px;");
    colBG1.classList.add("col-md-4");
    colBG1.classList.add("bg-primary");


    let colPrint1 = document.createElement("div");
    colPrint1.classList.add("col-md-8");

    let btnPrint = document.createElement("button");
    btnPrint.classList.add("btn");
    btnPrint.classList.add("btn-link");
    btnPrint.classList.add("float-end");
    btnPrint.innerText = "Save to PDF";
    btnPrint.addEventListener("click", function() {
        var printContent = document.getElementById("cvContainer");
        var WinPrint = window.open('', '', 'width=900');
        WinPrint.document.write(printContent.innerHTML);
        WinPrint.document.close();
        WinPrint.focus();
        WinPrint.print();
        WinPrint.close();
    });

    let btnDelete = document.createElement("button");
    btnDelete.classList.add("btn");
    btnDelete.classList.add("btn-link");
    btnDelete.classList.add("text-danger");
    btnDelete.classList.add("float-end");
    btnDelete.innerText = "Delete";
    btnDelete.addEventListener("click", function() {
        let cv = document.getElementById("cvContainer");
        cv.innerHTML = "";
    });

    colPrint1.appendChild(btnPrint);
    colPrint1.appendChild(btnDelete);
    Design1.appendChild(colBG1);
    Design1.appendChild(colPrint1);


    /// SECOND ROW 
    let Name_Summary_Row = document.createElement("div");
    Name_Summary_Row.classList.add("row");

    let NameTag = document.createElement("h1");
    NameTag.classList.add("text-primary");
    NameTag.innerText = Name;

    let NameBlock = document.createElement("div");
    NameBlock.classList.add("col-md-6");
    NameBlock.classList.add("mt-5");
    NameBlock.appendChild(NameTag);

    let SummaryBlock = document.createElement("div");
    SummaryBlock.classList.add("col-md-6");
    SummaryBlock.classList.add("mt-5");

    let SummaryLabel = document.createElement("p");
    SummaryLabel.innerText = Summary;

    let SummaryTitle = document.createElement("h4");
    SummaryTitle.classList.add("text-primary");
    SummaryTitle.innerText = "Summary"

    SummaryBlock.appendChild(SummaryTitle);
    SummaryBlock.appendChild(document.createElement("hr"));
    SummaryBlock.appendChild(SummaryLabel);

    Name_Summary_Row.appendChild(NameBlock);
    Name_Summary_Row.appendChild(SummaryBlock);

    // THIRD ROW 
    let ContactSkillRow = document.createElement("div");
    ContactSkillRow.classList.add("row");

    let ContactBlock = document.createElement("div");
    ContactBlock.classList.add("col-md-6");
    ContactBlock.classList.add("mt-5");

    let ContactTitle = document.createElement("h4");
    ContactTitle.classList.add("text-primary");
    ContactTitle.innerText = "Contact";

    let contactAddressTitle = document.createElement("h5");
    contactAddressTitle.innerText = "Address:";

    let contactAddressVal = document.createElement("p");
    contactAddressVal.innerText = Address;

    let contactPhoneTitle = document.createElement("h5");
    contactPhoneTitle.innerText = "Phone:";

    let contactPhoneVal = document.createElement("p");
    contactPhoneVal.innerText = Phone;

    let contactMailTitle = document.createElement("h5");
    contactMailTitle.innerText = "Mail:";

    let contactMailVal = document.createElement("p");
    contactMailVal.innerText = Mail;

    let contactWebSiteTitle = document.createElement("h5");
    contactWebSiteTitle.innerText = "Website:";

    let contactWebSiteVal = document.createElement("p");
    contactWebSiteVal.innerText = Website;

    ContactBlock.appendChild(ContactTitle);
    ContactBlock.appendChild(document.createElement("hr"));
    ContactBlock.appendChild(contactAddressTitle);
    ContactBlock.appendChild(contactAddressVal);
    ContactBlock.appendChild(contactPhoneTitle);
    ContactBlock.appendChild(contactPhoneVal);
    ContactBlock.appendChild(contactMailTitle);
    ContactBlock.appendChild(contactMailVal);
    ContactBlock.appendChild(contactWebSiteTitle);
    ContactBlock.appendChild(contactWebSiteVal);

    let SkillBlock = document.createElement("div");
    SkillBlock.classList.add("col-md-6");
    SkillBlock.classList.add("mt-5");

    let SkillLTItle = document.createElement("h4");
    SkillLTItle.classList.add("text-primary");
    SkillLTItle.innerText = "SKills Highlights"

    let listUL = document.createElement("ul");

    for (let index = 0; index < Skills.length; index++) {
        const element = Skills[index];
        let listLI = document.createElement("li");
        listLI.innerText = element;
        listUL.appendChild(listLI);
    }

    SkillBlock.appendChild(SkillLTItle);
    SkillBlock.appendChild(document.createElement("hr"));
    SkillBlock.appendChild(listUL);

    ContactSkillRow.appendChild(ContactBlock);
    ContactSkillRow.appendChild(SkillBlock);

    // FOUR ROW 
    let LangExperienceRow = document.createElement("div");
    LangExperienceRow.classList.add("row");

    let LangBlock = document.createElement("div");
    LangBlock.classList.add("col-md-6");
    LangBlock.classList.add("mt-5");

    let LangTitle = document.createElement("h4");
    LangTitle.classList.add("text-primary");
    LangTitle.innerText = "Languages";

    LangBlock.appendChild(LangTitle);
    LangBlock.appendChild(document.createElement("hr"));
    for (let index = 0; index < Languages.length; index++) {
        const element = Languages[index];
        let item = document.createElement("p");
        item.innerText = element;
        LangBlock.appendChild(item);
    }

    let ExperienceBlock = document.createElement("div");
    ExperienceBlock.classList.add("col-md-6");
    ExperienceBlock.classList.add("mt-5");

    let ExperienceTitle = document.createElement("h4");
    ExperienceTitle.classList.add("text-primary");
    ExperienceTitle.innerText = "Experience";

    let listUlExperience = document.createElement("ul");

    ExperienceBlock.appendChild(ExperienceTitle);
    ExperienceBlock.appendChild(document.createElement("hr"));
    for (let index = 0; index < WorkExperience.length; index++) {
        const element = WorkExperience[index];
        let item = document.createElement("li");
        item.innerText = element;
        listUlExperience.appendChild(item);
    }

    ExperienceBlock.appendChild(listUlExperience);
    LangExperienceRow.appendChild(LangBlock);
    LangExperienceRow.appendChild(ExperienceBlock);

    // FOUR ROW 
    let EducationCertificationRow = document.createElement("div");
    EducationCertificationRow.classList.add("row");

    let CertificationBlock = document.createElement("div");
    CertificationBlock.classList.add("col-md-6");
    CertificationBlock.classList.add("mt-5");

    let CertificationTitle = document.createElement("h4");
    CertificationTitle.classList.add("text-primary");
    CertificationTitle.innerText = "Certifications";

    CertificationBlock.appendChild(CertificationTitle);
    CertificationBlock.appendChild(document.createElement("hr"));
    for (let index = 0; index < Certifications.length; index++) {
        const element = Certifications[index];
        let item = document.createElement("p");
        item.innerText = element;
        CertificationBlock.appendChild(item);
    }

    let EducationBlock = document.createElement("div");
    EducationBlock.classList.add("col-md-6");
    EducationBlock.classList.add("mt-5");

    let EducationTitle = document.createElement("h4");
    EducationTitle.classList.add("text-primary");
    EducationTitle.innerText = "Education";

    EducationBlock.appendChild(EducationTitle);
    EducationBlock.appendChild(document.createElement("hr"));
    for (let index = 0; index < Education.length; index++) {
        const element = Education[index];
        let item = document.createElement("p");
        item.innerText = element;
        EducationBlock.appendChild(item);
    }

    EducationCertificationRow.appendChild(CertificationBlock);
    EducationCertificationRow.appendChild(EducationBlock);

    let Design2 = document.createElement("div");
    Design2.classList.add("row");

    let colBG2 = document.createElement("div");
    colBG2.classList.add("col-md-4");

    let colPrint2 = document.createElement("div");
    colPrint2.setAttribute("style", "height: 60px;");
    colPrint2.classList.add("col-md-8");
    colPrint2.classList.add("bg-primary");

    Design2.appendChild(colBG2);
    Design2.appendChild(colPrint2);


    cardBody.appendChild(Design1);
    cardBody.appendChild(Name_Summary_Row);
    cardBody.appendChild(ContactSkillRow);
    cardBody.appendChild(LangExperienceRow);
    cardBody.appendChild(EducationCertificationRow);
    cardBody.appendChild(Design2);

    cvContainer.appendChild(cardBody);
}


function setValidation(value) {
    let inputName = document.getElementById("inputName");
    let inputMail = document.getElementById("inputMail");
    let inputAddress = document.getElementById("inputAddress");
    let inputSummary = document.getElementById("inputSummary");
    let inputPhone = document.getElementById("inputPhone");
    let inputWebsite = document.getElementById("inputWebsite");
    let inputLanguage = document.getElementById("inputLanguage");
    let inputWorkExperience = document.getElementById("inputWorkExperience");
    let inputEducation = document.getElementById("inputEducation");
    let inputSkills = document.getElementById("inputSkills");
    let inputCertifications = document.getElementById("inputCertifications");

    if (value) {
        inputName.classList.remove("border-wrong");
        inputMail.classList.remove("border-wrong");
        inputAddress.classList.remove("border-wrong");
        inputSummary.classList.remove("border-wrong");
        inputPhone.classList.remove("border-wrong");
        inputWebsite.classList.remove("border-wrong");
        inputLanguage.classList.remove("border-wrong");
        inputWorkExperience.classList.remove("border-wrong");
        inputEducation.classList.remove("border-wrong");
        inputSkills.classList.remove("border-wrong");
        inputCertifications.classList.remove("border-wrong");

        inputName.classList.add("border-success");
        inputMail.classList.add("border-success");
        inputAddress.classList.add("border-success");
        inputSummary.classList.add("border-success");
        inputPhone.classList.add("border-success");
        inputWebsite.classList.add("border-success");
        inputLanguage.classList.add("border-success");
        inputWorkExperience.classList.add("border-success");
        inputEducation.classList.add("border-success");
        inputSkills.classList.add("border-success");
        inputCertifications.classList.add("border-success");

    } else {
        inputName.classList.remove("border-success");
        inputMail.classList.remove("border-success");
        inputAddress.classList.remove("border-success");
        inputSummary.classList.remove("border-success");
        inputPhone.classList.remove("border-success");
        inputWebsite.classList.remove("border-success");
        inputLanguage.classList.remove("border-success");
        inputWorkExperience.classList.remove("border-success");
        inputEducation.classList.remove("border-success");
        inputSkills.classList.remove("border-success");
        inputCertifications.classList.remove("border-success");

        inputName.classList.add("border-wrong");
        inputMail.classList.add("border-wrong");
        inputAddress.classList.add("border-wrong");
        inputSummary.classList.add("border-wrong");
        inputPhone.classList.add("border-wrong");
        inputWebsite.classList.add("border-wrong");
        inputLanguage.classList.add("border-wrong");
        inputWorkExperience.classList.add("border-wrong");
        inputEducation.classList.add("border-wrong");
        inputSkills.classList.add("border-wrong");
        inputCertifications.classList.add("border-wrong");
    }
}

// let inputName = document.getElementById("inputName");
// let valinputName = inputName.innerText;

// let inputMail = document.getElementById("inputMail");
// let valinputMail = inputName.innerText;

// let inputAddress = document.getElementById("inputAddress");
// let valinputAddress = inputName.innerText;

// let inputSummary = document.getElementById("inputSummary");
// let valinputSummary = inputName.innerText;

// let inputPhone = document.getElementById("inputAddress");
// let valinputPhone = inputName.innerText;

// let inputWebsite = document.getElementById("inputSummary");
// let valinputWebsite = inputName.innerText;

// let inputLanguage = document.getElementById("inputLanguage");
// let valinputLanguage = inputName.innerText;

// let inputWorkExperience = document.getElementById("inputWorkExperience");
// let valinputWorkExperience = inputName.innerText;

// let inputEducation = document.getElementById("inputEducation");
// let valinputEducation = inputName.innerText;

// let inputSkills = document.getElementById("inputSkills");
// let valinputSkills = inputName.innerText;

// let inputCertifications = document.getElementById("inputCertifications");
// let valinputCertifications = inputName.value;