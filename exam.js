
let militaryUnit = {

  name: "1st Infantry Division",

  location: "Fort Bragg, North Carolina, USA",

  establishmentDate: "1941-06-01",

  unitType: "Infantry Division",

  commandStructure: {

    commandingOfficer: {

      rank: "Major General",

      name: "John Doe",

      contact: {

        email: "john.doe@example.com",

        phone: "+1-555-123-4567",

      },

    },

    executiveOfficer: {

      rank: "Colonel",

      name: "Jane Smith",

      contact: {

        email: "jane.smith@example.com",

        phone: "+1-555-987-6543",

      },

    },

    chiefOfStaff: {

      rank: "Brigadier General",

      name: "Robert Brown",

      contact: {

        email: "robert.brown@example.com",

        phone: "+1-555-555-1234",

      },

    },

  },

  personnel: [

    {

      id: 1,

      name: "Private First Class Alice Johnson",

      rank: "Private First Class",

      role: "Rifleman",

      contact: {

        email: "alice.johnson@example.com",

        phone: "+1-555-000-1111",

      },

    },

    {

      id: 2,

      name: "Sergeant Michael White",

      rank: "Sergeant",

      role: "Squad Leader",

      contact: {

        email: "michael.white@example.com",

        phone: "+1-555-000-2222",

      },

    },

  ],

  equipment: {

    vehicles: [

      {

        type: "M1 Abrams Tank",

        quantity: 20,

        status: "Operational",

      },

      {

        type: "Humvee",

        quantity: 50,

        status: "Operational",

      },

    ],

    firearms: [

      {

        type: "M16 Rifle",

        quantity: 500,

        status: "Operational",

      },

      {

        type: "M249 SAW",

        quantity: 100,

        status: "Operational",

      },

    ],

    otherEquipment: [

      {

        type: "Night Vision Goggles",

        quantity: 150,

        status: "Operational",

      },

      {

        type: "Field Radios",

        quantity: 100,

        status: "Operational",

      },

    ],

  },

  missions: [

    {

      missionName: "Operation Desert Storm",

      startDate: "1991-01-17",

      endDate: "1991-02-28",

      description: "Combat operation to liberate Kuwait from Iraqi occupation.",

    },

    {

      missionName: "Operation Enduring Freedom",

      startDate: "2001-10-07",

      endDate: "2014-12-28",

      description:

        "Military operations aimed at dismantling al-Qaeda and removing the Taliban from power in Afghanistan.",

    },

  ],

  trainingPrograms: [

    {

      programName: "Basic Combat Training",

      duration: 10,

      focus:

        "Fundamentals of soldiering, physical conditioning, and basic combat skills.",

    },

    {

      programName: "Advanced Individual Training",

      duration: 12,

      focus:

        "Specialized training for specific military occupational specialties.",

    },

  ],

  history: [

    {

      eventDate: "1941-06-01",

      eventDescription: "Establishment of the 1st Infantry Division.",

    },

    {

      eventDate: "1944-06-06",

      eventDescription: "Participated in the D-Day landings in Normandy.",

    },

  ],

  currentDeployment: {

    location: "Middle East",

    mission: "Counter-terrorism operations",

    startDate: "2024-01-01",

    estimatedEndDate: "2024-12-31",

  },

};

function Mission1(militaryUnit) {
    const chiefOfStaff = militaryUnit.commandStructure.chiefOfStaff;
    return `Rank: ${chiefOfStaff.rank}, Name: ${chiefOfStaff.name}, Phone: ${chiefOfStaff.contact.phone}`;
  }
   
//console.log(Mission1(militaryUnit));

function Mission2(militaryUnit){
    const soldiers = militaryUnit.missions
    return `${soldiers.length}`;
}

//console.log(Mission2(militaryUnit));

const newDeployment = {
    location: "South Asia",
    mission: "Humanitarian aid",
    startDate: "2024-09-01",
    estimatedEndDate: "2025-03-01"
}

function Mission3(militaryUnit,newDeployment){
    eventDate = militaryUnit.currentDeployment.estimatedEndDate
    eventDescription = militaryUnit.currentDeployment.mission
    militaryUnit.history.push({eventDate,eventDescription})
    militaryUnit.currentDeployment = {
        location: newDeployment.location,
        mission: newDeployment.mission,
        startDate: newDeployment.startDate,
        estimatedEndDate: newDeployment.estimatedEndDate
    };
    return militaryUnit; 
}

//console.log(Mission3(militaryUnit,newDeployment));

const firearm ={
    type: "Night Vision Goggles",
    quantity: 50,
    status: "Operational"
}

function Mission4(firearm, militaryUnit) {
    const firearms = militaryUnit.equipment.firearms;
    const existingFirearm = firearms.find(f => f.type === firearm.type && f.status === firearm.status);
    if (existingFirearm) {
      existingFirearm.quantity += firearm.quantity;
    } else {
      firearms.push({
        type: firearm.type,
        quantity: firearm.quantity,
        status: firearm.status
      });
      return militaryUnit;
    }
  }


function Mission5(militaryUnit) {
    const trainingPrograms = militaryUnit.trainingPrograms;
    const totalDuration = trainingPrograms.reduce((sum, program) => sum + program.duration, 0);
    const result = `Total: ${totalDuration} `;
    return result;
  }




module.exports = {
    Mission1,
    Mission2,
    Mission3,
    Mission4,
    Mission5
}
