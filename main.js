
let bestInClass ={
  board : 3000,
  laminate : 1500,
  hinges : 650,
  channels : 650,
  handles : 200,
  fevicol : 215,
  edgeBindingTape : 15,
  screw : 150,
  lock : 200,
  packingMaterialCost : 500,
  additionalCarpenterPayments : 1200,
  helper : 600,
  inboundLogistics : 500,
  outboundLogistics : 800,
  labour : 1500,
  salesInstallation : 1500,
  partnerMaterialMargin : 0,
  ucComissionLabour : 8,
  ucComissionMaterial : 8
}

let extraSmooth = {
  board : 1750,
  laminate : 1000,
  hinges : 400,
  channels : 400,
  handles : 200,
  fevicol : 215,
  edgeBindingTape : 15,
  screw : 150,
  lock : 200,
  packingMaterialCost : 500,
  additionalCarpenterPayments : 1200,
  helper : 600,
  inboundLogistics : 500,
  outboundLogistics : 800,
  labour : 1500,
  salesInstallation : 1500,
  partnerMaterialMargin : 0,
  ucComissionLabour : 8,
  ucComissionMaterial : 8
}

let extraDurable = {
  board : 1750,
  laminate : 500,
  hinges : 400,
  channels : 400,
  handles : 200,
  fevicol : 215,
  edgeBindingTape : 15,
  screw : 150,
  lock : 200,
  packingMaterialCost : 500,
  additionalCarpenterPayments : 1200,
  helper : 600,
  inboundLogistics : 500,
  outboundLogistics : 800,
  labour : 1500,
  salesInstallation : 1500,
  partnerMaterialMargin : 0,
  ucComissionLabour : 8,
  ucComissionMaterial : 8
}

let standard = {
  board : 1450,
  laminate : 500,
  hinges : 250,
  channels : 250,
  handles : 200,
  fevicol : 215,
  edgeBindingTape : 15,
  screw : 150,
  lock : 200,
  packingMaterialCost : 500,
  additionalCarpenterPayments : 1200,
  helper : 600,
  inboundLogistics : 500,
  outboundLogistics : 800,
  labour : 1500,
  salesInstallation : 1500,
  partnerMaterialMargin : 0,
  ucComissionLabour : 8,
  ucComissionMaterial : 8
}


let budget = {
  board : 1850,
  laminate : 0,
  hinges : 250,
  channels : 250,
  handles : 200,
  fevicol : 50,
  edgeBindingTape : 15,
  screw : 150,
  lock : 200,
  packingMaterialCost : 0,
  additionalCarpenterPayments : 800,
  helper : 400,
  inboundLogistics : 500,
  outboundLogistics : 0,
  labour : 1500,
  salesInstallation : 1000,
  partnerMaterialMargin : 0,
  ucComissionLabour : 8,
  ucComissionMaterial : 8
}

function calculate(){

    let boards = parseFloat(document.getElementsByName('boards')[0].value);
    let channels = parseFloat(document.getElementsByName('channels')[0].value);
    let hinges = parseFloat(document.getElementsByName('hinges')[0].value);
    let locks = parseFloat(document.getElementsByName('locks')[0].value);

    let laminate = boards*2;
    let handles = hinges + channels;
    let fevicol = boards * 1.5;
    let edgeBindingTape = boards * 35 ;

    let screw = 1;
    let packingMaterialCost = 1;

    let additionalCarpenterPayments = 0;
    let labour = Math.round(boards/2)*0.75 + (channels * 0.75);
    let salesInstallation = 0.25;
    let helper = Math.round(labour);

    let inboundLogistics = 1;
    let outboundLogistics = 1;

    let materialCost , labourCost , logisticCost , partnerEarning , ucEarnings , finalCost;


    //Calculating Best In Class

    materialCost =
    boards*bestInClass.board +
    channels * bestInClass.channels +
    laminate*bestInClass.laminate +
    hinges*bestInClass.hinges +
    handles * bestInClass.handles +
    fevicol * bestInClass.fevicol +
    edgeBindingTape * bestInClass.edgeBindingTape +
    screw * bestInClass.screw +
    locks * bestInClass.lock+
    packingMaterialCost * bestInClass.packingMaterialCost ;

    labourCost =
    additionalCarpenterPayments * bestInClass.additionalCarpenterPayments +
    helper * bestInClass.helper

    logisticCost =
    inboundLogistics * bestInClass.inboundLogistics +
    outboundLogistics * bestInClass.outboundLogistics;

    partnerEarning =
    labour * bestInClass.labour +
    salesInstallation * bestInClass.salesInstallation +
    (materialCost*bestInClass.partnerMaterialMargin)/100;

    ucEarnings =
    ((labourCost + logisticCost + partnerEarning)*bestInClass.ucComissionLabour)/100 +
    (materialCost * bestInClass.ucComissionMaterial)/100;

    finalCost = Math.round(materialCost + labourCost + logisticCost + partnerEarning + ucEarnings);

    document.getElementById('class').innerText = (Math.round(finalCost/100)*100).toLocaleString('en-IN');


    //Calculating Extra Smooth

    materialCost =
    boards*extraSmooth.board +
    channels * extraSmooth.channels +
    laminate*extraSmooth.laminate +
    hinges*extraSmooth.hinges +
    handles * extraSmooth.handles +
    fevicol * extraSmooth.fevicol +
    edgeBindingTape * extraSmooth.edgeBindingTape +
    screw * extraSmooth.screw +
    locks * extraSmooth.lock+
    packingMaterialCost * extraSmooth.packingMaterialCost ;

    labourCost =
    additionalCarpenterPayments * extraSmooth.additionalCarpenterPayments +
    helper * extraSmooth.helper

    logisticCost =
    inboundLogistics * extraSmooth.inboundLogistics +
    outboundLogistics * extraSmooth.outboundLogistics;

    partnerEarning =
    labour * extraSmooth.labour +
    salesInstallation * extraSmooth.salesInstallation +
    (materialCost*extraSmooth.partnerMaterialMargin)/100;

    ucEarnings =
    ((labourCost + logisticCost + partnerEarning)*extraSmooth.ucComissionLabour)/100 +
    (materialCost * extraSmooth.ucComissionMaterial)/100;

    finalCost = Math.round(materialCost + labourCost + logisticCost + partnerEarning + ucEarnings);

    document.getElementById('smooth').innerText = (Math.round(finalCost/100)*100).toLocaleString('en-IN');

    //Calculating Extra Durable

    materialCost =
    boards*extraDurable.board +
    channels * extraDurable.channels +
    laminate*extraDurable.laminate +
    hinges*extraDurable.hinges +
    handles * extraDurable.handles +
    fevicol * extraDurable.fevicol +
    edgeBindingTape * extraDurable.edgeBindingTape +
    screw * extraDurable.screw +
    locks * extraDurable.lock+
    packingMaterialCost * extraDurable.packingMaterialCost ;

    labourCost =
    additionalCarpenterPayments * extraDurable.additionalCarpenterPayments +
    helper * extraDurable.helper

    logisticCost =
    inboundLogistics * extraDurable.inboundLogistics +
    outboundLogistics * extraDurable.outboundLogistics;

    partnerEarning =
    labour * extraDurable.labour +
    salesInstallation * extraDurable.salesInstallation +
    (materialCost*extraDurable.partnerMaterialMargin)/100;

    ucEarnings =
    ((labourCost + logisticCost + partnerEarning)*extraDurable.ucComissionLabour)/100 +
    (materialCost * extraDurable.ucComissionMaterial)/100;

    finalCost = Math.round(materialCost + labourCost + logisticCost + partnerEarning + ucEarnings);

    document.getElementById('durable').innerText = (Math.round(finalCost/100)*100).toLocaleString('en-IN');


    // Calculating Standard

    materialCost =
    boards*standard.board +
    channels * standard.channels +
    laminate*standard.laminate +
    hinges*standard.hinges +
    handles * standard.handles +
    fevicol * standard.fevicol +
    edgeBindingTape * standard.edgeBindingTape +
    screw * standard.screw +
    locks * standard.lock+
    packingMaterialCost * standard.packingMaterialCost ;

    labourCost =
    additionalCarpenterPayments * standard.additionalCarpenterPayments +
    helper * standard.helper * 0.75;

    logisticCost =
    inboundLogistics * standard.inboundLogistics +
    outboundLogistics * standard.outboundLogistics;

    partnerEarning =
    labour * standard.labour * 0.75 +
    salesInstallation * standard.salesInstallation +
    (materialCost*standard.partnerMaterialMargin)/100;

    ucEarnings =
    ((labourCost + logisticCost + partnerEarning)*standard.ucComissionLabour)/100 +
    (materialCost * standard.ucComissionMaterial)/100;

    finalCost = Math.round(materialCost + labourCost + logisticCost + partnerEarning + ucEarnings);

    document.getElementById('Standard').innerText = (Math.round(finalCost/100)*100).toLocaleString('en-IN');
  
  // Calculating Budget

    materialCost =
    boards*budget.board +
    channels * budget.channels +
    laminate*budget.laminate +
    hinges*budget.hinges +
    handles * budget.handles +
    fevicol * budget.fevicol +
    edgeBindingTape * budget.edgeBindingTape +
    screw * budget.screw +
    locks * budget.lock+
    packingMaterialCost * budget.packingMaterialCost ;

    labourCost =
    additionalCarpenterPayments * budget.additionalCarpenterPayments +
    helper * budget.helper * 0.75;

    logisticCost =
    inboundLogistics * budget.inboundLogistics +
    outboundLogistics * budget.outboundLogistics;

    partnerEarning =
    labour * budget.labour * 0.75 +
    salesInstallation * budget.salesInstallation +
    (materialCost*budget.partnerMaterialMargin)/100;

    ucEarnings =
    ((labourCost + logisticCost + partnerEarning)*budget.ucComissionLabour)/100 +
    (materialCost * budget.ucComissionMaterial)/100;

    finalCost = Math.round(materialCost + labourCost + logisticCost + partnerEarning + ucEarnings);

    document.getElementById('Budget').innerText = (Math.round(finalCost/100)*100).toLocaleString('en-IN');

}
