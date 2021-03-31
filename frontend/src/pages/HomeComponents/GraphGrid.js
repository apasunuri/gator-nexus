import React from 'react';

import PieChartInternshipGraph from "./PieChartInternshipGraph";
import PieChartEthnicityGraph from "./PieChartEthnicityGraph";
import PieChartGenderGraph from "./PieChartGenderGraph";

import BarChartAcademicStandingInternshipGraph from "./BarChartAcademicStandingInternshipGraph";
import BarChartGenderInternshipGraph from "./BarChartGenderInternshipGraph";
import BarChartRaceInternshipGraph from "./BarChartRaceInternship";

import ScatterChartGPAHouseholdIncomeGraph from "./ScatterChartGPAHouseholdIncomeGraph";
import ScatterChartGPAHouseholdIncomeGenderGraph from "./ScatterChartGPAHouseholdIncomeGenderGraph";



const GraphGrid = () => {

  return (
    <div className="graph-grid">
      <div className="graph-wrap">
        <h3>Internship Participation</h3>
        <PieChartInternshipGraph className="graph"/>
      </div>
      <div className="graph-wrap">
        <h3>Ethncity</h3>
        <PieChartEthnicityGraph className="graph"/>
      </div>
      <div className="graph-wrap">
        <h3>Gender</h3>
        <PieChartGenderGraph className="graph"/>
      </div>

      <div className="graph-wrap">
        <h3>Internship Participation By Year</h3>
        <BarChartAcademicStandingInternshipGraph className="graph"/>
      </div>
      <div className="graph-wrap">
        <h3>Internship Participation By Gender</h3>
        <BarChartGenderInternshipGraph className="graph"/>
      </div>
      <div className="graph-wrap">
        <h3>Internship Participation By Race</h3>
        <BarChartRaceInternshipGraph className="graph"/>
      </div>

      <div className="graph-wrap">
        <h3>GPA vs Family Income</h3>
        <ScatterChartGPAHouseholdIncomeGraph className="graph"/>
      </div>
      <div className="graph-wrap">
        <h3>GPA, Family Income, Gender</h3>
        <ScatterChartGPAHouseholdIncomeGenderGraph className="graph"/>
      </div>
    </div>
  )
}

export default GraphGrid;