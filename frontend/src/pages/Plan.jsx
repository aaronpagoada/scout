import React from "react";
import TripPlanForm from "../components/TripPlanForm";

function Plan() {
  return (
		<div className="flex flex-col items-center">
			<h1 className="flex justify-center text-4xl pb-8">Plan</h1>
			<TripPlanForm />
		</div>
  )
}

export default Plan