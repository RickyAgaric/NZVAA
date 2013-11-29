// ==UserScript==
// @name           NZVAA
// @description    New Zealand Working Holiday Visa Apply Assistant
// @version        1.0
// @author         ricky.agaric
// @namespace      https://github.com/RickyAgaric/NZVAA
// @include        https://www.immigration.govt.nz/*
// ==/UserScript==

function nzvaaQuery(callback, safe) {
	console.log("type of jquery is " + typeof (jQuery));
	if (typeof (jQuery) == "undefined") {
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js";

		if (safe) {
			var cb = document.createElement("script");
			cb.type = "text/javascript";
			cb.textContent = "jQuery.noConflict();(" + callback.toString()
					+ ")(jQuery, window);";
			script.addEventListener('load', function() {
				document.head.appendChild(cb);
			});
		} else {
			var dollar = undefined;
			if (typeof ($) != "undefined")
				dollar = $;
			script.addEventListener('load', function() {
				jQuery.noConflict();
				$ = dollar;
				callback(jQuery, window);
			});
		}
		document.head.appendChild(script);
	} else {
		console.log("jQuery has defined");
	}
};

function notify(str, timeout, skipAlert) {
	if (window.webkitNotifications
			&& window.webkitNotifications.checkPermission() == 0) {
		var notification = webkitNotifications.createNotification(
				"http://www.immigration.govt.nz/images/blank.gif", // icon url - can be relative
				'book ticket', // notification title
				str);
		notification.show();
		if (timeout) {
			setTimeout(function() {
				notification.cancel();
			}, timeout);
		}
		return true;
	} else {
		if (!skipAlert) {
			alert(str);
		}
		return false;
	}
}

function route(match, fn) {
	if (window.location.href.indexOf(match) != -1) {
		fn();
	}
	;
}

function queryQuota() {
	location.reload();
	var applyBu = document.getElementById('ctl00_ContentPlaceHolder1_applyNowButton');
	if(applyBu) {
		applyBu.click();
		return;
	} else {
		console.log("Don't have candidate");
		setTimeout(queryQuota, 5000);
	}
}

function fillPersonal1() {
//	Personal
	$("#ctl00_ContentPlaceHolder1_personDetails_familyNameTextBox").val("Lin");
	$("#ctl00_ContentPlaceHolder1_personDetails_givenName1Textbox").val("Jie");
	$("#ctl00_ContentPlaceHolder1_personDetails_genderDropDownList").val("F");
	$("#ctl00_ContentPlaceHolder1_personDetails_dateOfBithDatePicker_Day").val("21");
	$("#ctl00_ContentPlaceHolder1_personDetails_dateOfBithDatePicker_Month").val("6");
	$("#ctl00_ContentPlaceHolder1_personDetails_dateOfBithDatePicker_Year").val("1990");
	
//	Address
	$("#ctl00_ContentPlaceHolder1_addressContactDetails_address_address1TextBox").val("");
	$("#ctl00_ContentPlaceHolder1_addressContactDetails_address_cityTextBox").val("");
	$("#ctl00_ContentPlaceHolder1_addressContactDetails_address_countryDropDownList").val("46");
	
//	Contact Details
	$("#ctl00_ContentPlaceHolder1_addressContactDetails_contactDetails_emailAddressTextBox").val("");
	$("#ctl00_ContentPlaceHolder1_hasAgent_representedByAgentDropdownlist").val("Yes");
	$("#ctl00_ContentPlaceHolder1_communicationMethod_communicationMethodDropDownList").val("1");
	
	//*[@id="ctl00_ContentPlaceHolder1_wizardPageHeader_nav_previousImageButton"]
	//*[@id="ctl00_ContentPlaceHolder1_wizardPageHeader_nav_validateButton"]
	//*[@id="ctl00_ContentPlaceHolder1_wizardPageHeader_nav_completeLaterImageButton"]
	//*[@id="ctl00_ContentPlaceHolder1_wizardPageHeader_nav_nextImageButton"]
	//*[@id="ctl00_ContentPlaceHolder1_wizardPageFooter_wizardPageNavigator_previousImageButton"]
	//*[@id="ctl00_ContentPlaceHolder1_wizardPageFooter_wizardPageNavigator_validateButton"]
	//*[@id="ctl00_ContentPlaceHolder1_wizardPageFooter_wizardPageNavigator_completeLaterImageButton"]
	//*[@id="ctl00_ContentPlaceHolder1_wizardPageFooter_wizardPageNavigator_nextImageButton"]
}

function fillPersonal2() {
//	Passport Details
	$("#ctl00_ContentPlaceHolder1_identification_passportNumberTextBox").val("");
	$("#ctl00_ContentPlaceHolder1_identification_confirmPassportNumberTextBox").val("");
	$("#ctl00_ContentPlaceHolder1_identification_passportExpiryDateDatePicker_Day").val("");
	$("#ctl00_ContentPlaceHolder1_identification_passportExpiryDateDatePicker_Month").val("");
	$("#ctl00_ContentPlaceHolder1_identification_passportExpiryDateDatePicker_Year").val("");
	
//	Second Form of Identification
	$("#ctl00_ContentPlaceHolder1_identification_otherIdentificationDropdownlist").val("3");
	$("#ctl00_ContentPlaceHolder1_identification_otherIssueDateDatePicker_Day").val("");
	$("#ctl00_ContentPlaceHolder1_identification_otherIssueDateDatePicker_Month").val("");
	$("#ctl00_ContentPlaceHolder1_identification_otherIssueDateDatePicker_Year").val("");
	$("#ctl00_ContentPlaceHolder1_identification_otherExpiryDateDatePicker_Day").val("");
	$("#ctl00_ContentPlaceHolder1_identification_otherExpiryDateDatePicker_Month").val("");
	$("#ctl00_ContentPlaceHolder1_identification_otherExpiryDateDatePicker_Year").val("");
}

function fillPersonal3() {
//	Industry
	$("#ctl00_ContentPlaceHolder1_generalPersonal_industryControl_selectedIndustryLabel").html("");
//	Occupation
	$("#ctl00_ContentPlaceHolder1_generalPersonal_occupationControl_selectedOccupationLabel").html("");
}

function fillMedical1() {
	//*[@id="ctl00_ContentPlaceHolder1_medicalConditions_renalDialysisDropDownList"]
//	<select name="ctl00$ContentPlaceHolder1$medicalConditions$renalDialysisDropDownList" onchange="javascript:setTimeout('__doPostBack(\'ctl00$ContentPlaceHolder1$medicalConditions$renalDialysisDropDownList\',\'\')', 0)" id="ctl00_ContentPlaceHolder1_medicalConditions_renalDialysisDropDownList">
//	<option value="">Select an option</option>
//	<option selected="selected" value="No">No</option>
//	<option value="Yes">Yes</option>
//
//</select>
	$("#ctl00_ContentPlaceHolder1_medicalConditions_renalDialysisDropDownList").val("No");
	$("#ctl00_ContentPlaceHolder1_medicalConditions_tuberculosisDropDownList").val("No");
	$("#ctl00_ContentPlaceHolder1_medicalConditions_cancerDropDownList").val("No");
	$("#ctl00_ContentPlaceHolder1_medicalConditions_heartDiseaseDropDownList").val("No");
	$("#ctl00_ContentPlaceHolder1_medicalConditions_disabilityDropDownList").val("No");
	$("#ctl00_ContentPlaceHolder1_medicalConditions_hospitalisationDropDownList").val("No");
	$("#ctl00_ContentPlaceHolder1_medicalConditions_residentailCareDropDownList").val("No");
	$("#ctl00_ContentPlaceHolder1_medicalConditions_pregnancy_pregnancyStatusDropDownList").val("No");
	$("#ctl00_ContentPlaceHolder1_medicalConditions_tbRiskDropDownList").val("No");
}

function fillCharacter() {
	$("#").val("");
}

function fillWorkingHolidaySpecific() {
	$("#").val("");
}

function applyQuota() {
}

function worker() {
	//https://www.immigration.govt.nz/WORKINGHOLIDAY/Application/Create.aspx?CountryId=46
	route("Create.aspx?CountryId=46", queryQuota);
	
	//Reference=965672
	//https://www.immigration.govt.nz/WorkingHoliday/Wizard/Personal1.aspx?ApplicationId=965672&IndividualType=Primary&IndividualIndex=1
	route("Personal1.aspx", fillPersonal1);
	//https://www.immigration.govt.nz/WorkingHoliday/Wizard/Personal2.aspx?ApplicationId=965672&IndividualType=Primary&IndividualIndex=1
	route("Personal2.aspx", fillPersonal2);
	//https://www.immigration.govt.nz/WorkingHoliday/Wizard/Personal3.aspx?ApplicationId=965672&IndividualType=Primary&IndividualIndex=1
	route("Personal3.aspx", fillPersonal3);
	
	//https://www.immigration.govt.nz/WorkingHoliday/Wizard/Medical1.aspx?ApplicationId=965672&IndividualType=Primary&IndividualIndex=1
	route("Medical1.aspx", fillMedical1);
	
	//https://www.immigration.govt.nz/WorkingHoliday/Wizard/Character.aspx?ApplicationId=965672&IndividualType=Primary&IndividualIndex=1
	route("Character.aspx", fillCharacter);
	
	//https://www.immigration.govt.nz/WorkingHoliday/Wizard/WorkingHolidaySpecific.aspx?ApplicationId=965672&IndividualType=Primary&IndividualIndex=1
	route("WorkingHolidaySpecific.aspx", fillWorkingHolidaySpecific);
	
	//
	route("", applyQuota);
};

nzvaaQuery(worker($,window), true);