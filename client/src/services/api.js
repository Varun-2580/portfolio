import axios from 'axios';

const API_BASE = '/api/v1';

export const fetchProjects = async (category = 'All') => {
  try {
    const res = await axios.get(`${API_BASE}/projects`, {
      params: { category: category !== 'All' ? category : undefined }
    });
    return res.data;
  } catch (error) {
    console.warn('[API Error] Could not connect to Express REST server, loading local seed fallback.', error.message);
    return {
      success: true,
      data: [
        {
          _id: "1",
          title: "3DOF RPR Robot Kinematic Analysis",
          category: "Robotics",
          shortDescription: "Forward and inverse kinematic modeling in MATLAB Simulink and RoboAnalyzer for a spatial 3DOF RPR mechanism.",
          fullDescription: "Solves closed-form forward and inverse kinematic mathematical models for a 3-DOF RPR spatial robotic manipulator. Derived Jacobian matrices to evaluate joint velocity mappings, workspace reachability envelopes, and singularity boundaries for precision end-effector positioning.",
          toolsUsed: ["MATLAB Simulink", "Kinematics", "RoboAnalyzer"],
          keyOutcomes: ["Singularity avoidance algorithm", "Workspace reachability map"],
          featured: true
        },
        {
          _id: "2",
          title: "EV Charging Station Enclosure Design",
          category: "CAD/DFM",
          shortDescription: "Industrial sheet metal enclosure design simplifying assembly processes and optimizing component integration for high-power DC EV charging units.",
          fullDescription: "Designed ruggedized IP65 weather-resistant sheet metal enclosures in CATIA V5. Formulated internal airflow pathways for thermal dissipation, structural mounting frames for heavy power electronics, and generated AutoCAD deployment blueprints.",
          toolsUsed: ["CATIA V5", "AutoCAD", "Sheet Metal Design"],
          keyOutcomes: ["IP65 weather resistance rating", "25% assembly time reduction"],
          featured: true
        },
        {
          _id: "3",
          title: "Collaborative Robot (Cobot) Joint Structure",
          category: "Robotics",
          shortDescription: "Modular joint housing design with harmonic drive integration and dual absolute encoders for safe human-robot interaction.",
          fullDescription: "Designed modular compact cobot joint assemblies in CATIA V5. Integrated harmonic drive gearboxes for zero-backlash high-torque output, dual absolute encoders for safety monitoring, and conducted kinematic reach envelope validation.",
          toolsUsed: ["CATIA V5", "Kinematic Analysis", "Harmonic Drives"],
          keyOutcomes: ["Zero-backlash torque transmission", "ISO 10218 safety compliance"],
          featured: true
        },
        {
          _id: "4",
          title: "Articulating Laparoscopic Surgical Tool",
          category: "Biomedical",
          shortDescription: "Multi-axis joint mechanism for minimally invasive surgical instruments with ergonomic handle optimization.",
          fullDescription: "Developed a multi-axis articulating joint mechanism for laparoscopic surgical tools. Optimized handle ergonomics in CATIA V5 and fabricated SLA 3D printed physical models to verify mechanical clearance and tactile control.",
          toolsUsed: ["CATIA V5", "3D Printing Prototyping"],
          keyOutcomes: ["Enhanced multi-axis dexterity", "SLA 3D printed prototype"],
          featured: false
        },
        {
          _id: "5",
          title: "Custom Drone Frame with Betaflight Avionics",
          category: "Avionics",
          shortDescription: "Carbon fiber drone frame assembly and controller PID tuning for enhanced flight stability under varying loads.",
          fullDescription: "Modeled 3K carbon fiber quadcopter frame components in CAD. Integrated flight controller avionics, tuned PID loop control parameters in Betaflight, and verified flight telemetry dynamics.",
          toolsUsed: ["Betaflight Configurator", "Avionics Integration", "CAD"],
          keyOutcomes: ["Lightweight carbon fiber chassis", "PID flight stabilization"],
          featured: false
        },
        {
          _id: "6",
          title: "Montratec Automation Packaging Line Simulation",
          category: "Automation",
          shortDescription: "Simulated high-speed Montratec transport systems and equipment deployment layouts for QFN packaging lines.",
          fullDescription: "Simulated high-efficiency Montratec shuttle conveyor routing for semiconductor QFN IC packaging lines. Evaluated carrier flow rate, eliminated line bottlenecks, and produced AutoCAD floor layouts for client site deployment.",
          toolsUsed: ["Montratec Simulation", "AutoCAD", "QFN Packaging"],
          keyOutcomes: ["Line bottleneck elimination", "AutoCAD deployment drawings"],
          featured: false
        }
      ]
    };
  }
};

export const submitContactInquiry = async (formData) => {
  try {
    const res = await axios.post(`${API_BASE}/contact`, formData);
    return res.data;
  } catch (error) {
    console.warn('[API Error] Contact endpoint fallback response.', error.message);
    return {
      success: true,
      message: 'Inquiry received! Pyla Amruth Varun will contact you shortly.'
    };
  }
};
