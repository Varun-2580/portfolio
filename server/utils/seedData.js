const initialProjects = [
  {
    _id: "660000000000000000000001",
    title: "3DOF RPR Robot Kinematic Analysis",
    slug: "3dof-rpr-kinematic-analysis",
    category: "Robotics",
    shortDescription: "Forward and inverse kinematic modeling in MATLAB Simulink and RoboAnalyzer for a spatial 3DOF RPR mechanism.",
    fullDescription: "Solves closed-form forward and inverse kinematic mathematical models for a 3-DOF RPR spatial robotic manipulator. Derived Jacobian matrices to evaluate joint velocity mappings, workspace reachability envelopes, and singularity boundaries for precision end-effector positioning.",
    toolsUsed: ["MATLAB Simulink", "Kinematics", "RoboAnalyzer"],
    keyOutcomes: ["Singularity avoidance algorithm", "Workspace reachability map", "Joint torque optimization"],
    media: {
      thumbnailUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop"
    },
    links: {
      github: "https://github.com/varun-robotics/3dof-rpr-kinematics"
    },
    featured: true,
    orderIndex: 1
  },
  {
    _id: "660000000000000000000002",
    title: "EV Charging Station Enclosure Design",
    slug: "ev-charging-station-enclosure",
    category: "CAD/DFM",
    shortDescription: "Industrial sheet metal enclosure design simplifying assembly processes and optimizing component thermal integration for high-power DC EV charging units.",
    fullDescription: "Designed ruggedized IP65 weather-resistant sheet metal enclosures in CATIA V5. Formulated internal airflow pathways for thermal dissipation, structural mounting frames for heavy power electronics, and generated AutoCAD deployment blueprints.",
    toolsUsed: ["CATIA V5", "AutoCAD", "Sheet Metal Design"],
    keyOutcomes: ["IP65 weather resistance rating", "25% assembly time reduction", "Thermal dissipation airflow channels"],
    media: {
      thumbnailUrl: "https://images.unsplash.com/photo-1558441719-67455705d676?q=80&w=800&auto=format&fit=crop"
    },
    links: {
      cadLibrary: "https://grabcad.com/library/ev-charger-enclosure"
    },
    featured: true,
    orderIndex: 2
  },
  {
    _id: "660000000000000000000003",
    title: "Collaborative Robot (Cobot) Joint Structure",
    category: "Robotics",
    slug: "cobot-joint-structure",
    shortDescription: "Modular joint housing design with harmonic drive integration and dual absolute encoders for safe human-robot interaction.",
    fullDescription: "Designed modular compact cobot joint assemblies in CATIA V5. Integrated harmonic drive gearboxes for zero-backlash high-torque output, dual absolute encoders for safety monitoring, and conducted kinematic reach envelope validation.",
    toolsUsed: ["CATIA V5", "Kinematic Analysis", "Harmonic Drives"],
    keyOutcomes: ["Zero-backlash torque transmission", "ISO 10218 safety compliance", "Modular joint swap capability"],
    media: {
      thumbnailUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
    },
    featured: true,
    orderIndex: 3
  },
  {
    _id: "660000000000000000000004",
    title: "Articulating Laparoscopic Surgical Tool",
    slug: "laparoscopic-surgical-tool",
    category: "Biomedical",
    shortDescription: "Multi-axis joint mechanism for minimally invasive surgical instruments with ergonomic handle optimization.",
    fullDescription: "Developed a multi-axis articulating joint mechanism for laparoscopic surgical tools. Optimized handle ergonomics in CATIA V5 and fabricated SLA 3D printed physical models to verify mechanical clearance and tactile control.",
    toolsUsed: ["CATIA V5", "3D Printing Prototyping", "Additive Manufacturing"],
    keyOutcomes: ["Enhanced multi-axis dexterity", "SLA 3D printed functional prototype", "Ergonomic actuation handle"],
    media: {
      thumbnailUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop"
    },
    featured: false,
    orderIndex: 4
  },
  {
    _id: "660000000000000000000005",
    title: "Custom Drone Frame with Betaflight Avionics",
    slug: "custom-drone-betaflight",
    category: "Avionics",
    shortDescription: "Carbon fiber drone frame assembly and controller PID tuning for enhanced flight stability under varying loads.",
    fullDescription: "Modeled 3K carbon fiber quadcopter frame components in CAD. Integrated flight controller avionics, tuned PID loop control parameters in Betaflight, and verified flight telemetry dynamics.",
    toolsUsed: ["Betaflight Configurator", "Avionics Integration", "CAD Modeling"],
    keyOutcomes: ["Lightweight carbon fiber chassis", "PID flight stabilization", "Telemetry logging integration"],
    media: {
      thumbnailUrl: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop"
    },
    featured: false,
    orderIndex: 5
  },
  {
    _id: "660000000000000000000006",
    title: "Montratec Automation Packaging Line Simulation",
    slug: "montratec-packaging-line-simulation",
    category: "Automation",
    shortDescription: "Simulated high-speed Montratec transport systems and equipment deployment layouts for QFN packaging lines.",
    fullDescription: "Simulated high-efficiency Montratec shuttle conveyor routing for semiconductor QFN IC packaging lines. Evaluated carrier flow rate, eliminated line bottlenecks, and produced AutoCAD floor layouts for client site deployment.",
    toolsUsed: ["Montratec Simulation", "AutoCAD", "QFN Packaging Systems"],
    keyOutcomes: ["Line bottleneck elimination", "Optimized shuttle transfer velocity", "AutoCAD site deployment drawings"],
    media: {
      thumbnailUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
    },
    featured: false,
    orderIndex: 6
  }
];

module.exports = initialProjects;
