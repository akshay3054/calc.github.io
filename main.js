
let bestInClass ={
  board : 2800,
  laminate : 1300,
  hinges : 450,
  channels : 450,
  handles : 200,
  fevicol : 215,
  edgeBindingTape : 15,
  screw : 150,
  lock : 200,
  packingMaterialCost : 200,
  additionalCarpenterPayments : 1200,
  helper : 600,
  inboundLogistics : 200,
  outboundLogistics : 200,
  labour : 20,
  salesInstallation : 2000,
  partnerMaterialMargin : 0,
  ucComissionLabour : 10,
  ucComissionMaterial : 10
}

let extraSmooth = {
  board : 1850,
  laminate : 1300,
  hinges : 450,
  channels : 450,
  handles : 200,
  fevicol : 215,
  edgeBindingTape : 15,
  screw : 150,
  lock : 200,
  packingMaterialCost : 200,
  additionalCarpenterPayments : 1200,
  helper : 600,
  inboundLogistics : 200,
  outboundLogistics : 200,
  labour : 20,
  salesInstallation : 2000,
  partnerMaterialMargin : 0,
  ucComissionLabour : 10,
  ucComissionMaterial : 10
}

let extraDurable = {
  board : 1850,
  laminate : 650,
  hinges : 450,
  channels : 450,
  handles : 200,
  fevicol : 215,
  edgeBindingTape : 15,
  screw : 150,
  lock : 200,
  packingMaterialCost : 200,
  additionalCarpenterPayments : 1200,
  helper : 600,
  inboundLogistics : 200,
  outboundLogistics : 200,
  labour : 20,
  salesInstallation : 2000,
  partnerMaterialMargin : 0,
  ucComissionLabour : 10,
  ucComissionMaterial : 10
}

let standard = {
  board : 1450,
  laminate : 650,
  hinges : 250,
  channels : 250,
  handles : 200,
  fevicol : 215,
  edgeBindingTape : 15,
  screw : 150,
  lock : 200,
  packingMaterialCost : 200,
  additionalCarpenterPayments : 1200,
  helper : 600,
  inboundLogistics : 200,
  outboundLogistics : 200,
  labour : 20,
  salesInstallation : 2000,
  partnerMaterialMargin : 0,
  ucComissionLabour : 10,
  ucComissionMaterial : 10
}


let budget = {
  board : 1950,
  laminate : 0,
  hinges : 150,
  channels : 150,
  handles : 100,
  fevicol : 50,
  edgeBindingTape : 15,
  screw : 150,
  lock : 200,
  packingMaterialCost : 0,
  additionalCarpenterPayments : 600,
  helper : 200,
  inboundLogistics : 200,
  outboundLogistics : 0,
  labour : 15,
  salesInstallation : 1500,
  partnerMaterialMargin : 0,
  ucComissionLabour : 10,
  ucComissionMaterial : 10
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
    ((materialCost + logisticCost + labourCost)*bestInClass.labour)/100 +
    salesInstallation * bestInClass.salesInstallation +
    (materialCost*bestInClass.partnerMaterialMargin)/100;   
    
    ucEarnings =
    ((labourCost + logisticCost + partnerEarning)*bestInClass.ucComissionLabour)/100 +
    (materialCost * bestInClass.ucComissionMaterial)/100;

    finalCost = (materialCost + labourCost + logisticCost + partnerEarning + ucEarnings);

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
    ((materialCost + logisticCost + labourCost)*extraSmooth.labour)/100 +
    salesInstallation * extraSmooth.salesInstallation +
    (materialCost*extraSmooth.partnerMaterialMargin)/100;

    ucEarnings =
    ((labourCost + logisticCost + partnerEarning)*extraSmooth.ucComissionLabour)/100 +
    (materialCost * extraSmooth.ucComissionMaterial)/100;

    finalCost = (materialCost + labourCost + logisticCost + partnerEarning + ucEarnings);

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
    ((materialCost + logisticCost + labourCost)*extraDurable.labour)/100 +
    salesInstallation * extraDurable.salesInstallation +
    (materialCost*extraDurable.partnerMaterialMargin)/100;

    ucEarnings =
    ((labourCost + logisticCost + partnerEarning)*extraDurable.ucComissionLabour)/100 +
    (materialCost * extraDurable.ucComissionMaterial)/100;

    finalCost = (materialCost + labourCost + logisticCost + partnerEarning + ucEarnings);

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
    ((materialCost + logisticCost + labourCost)*standard.labour)/100 +
    salesInstallation * standard.salesInstallation +
    (materialCost*standard.partnerMaterialMargin)/100;

    ucEarnings =
    ((labourCost + logisticCost + partnerEarning)*standard.ucComissionLabour)/100 +
    (materialCost * standard.ucComissionMaterial)/100;

    finalCost = (materialCost + labourCost + logisticCost + partnerEarning + ucEarnings);

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
    ((materialCost + logisticCost + labourCost)*budget.labour)/100 +
    salesInstallation * budget.salesInstallation +
    (materialCost*budget.partnerMaterialMargin)/100;

    ucEarnings =
    ((labourCost + logisticCost + partnerEarning)*budget.ucComissionLabour)/100 +
    (materialCost * budget.ucComissionMaterial)/100;

    finalCost = (materialCost + labourCost + logisticCost + partnerEarning + ucEarnings);

    document.getElementById('Budget').innerText = (Math.round(finalCost/100)*100).toLocaleString('en-IN');

}
