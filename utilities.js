function getInputValueById(textFieldId){
    const inputField=document.getElementById(textFieldId);
    const inputFieldValueString=inputField.value;
    const inputFieldValue=parseFloat(inputFieldValueString);
    inputField.value='';
    return inputFieldValue;
}
function getInputTextValueById(textFieldId){
    const textField=document.getElementById(textFieldId);
    const textFieldValueString=textField.innerText;
    const textFieldValue=parseFloat(textFieldValueString);
    return textFieldValue;
}
function setElementValue(inputId,setValue){
    const getElementId=document.getElementById(inputId);
    getElementId.innerText=setValue;
}