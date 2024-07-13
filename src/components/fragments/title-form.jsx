"use client";
import { Typography } from "@material-tailwind/react";

function TitleForm({ display }) {
  return (
    <div className="flex items-center gap-3 my-8">
      <Typography variant="h5" color="blue-gray" className="text-nowrap">
        {display}
      </Typography>
      <div className="border w-full"></div>
    </div>
  );
}

export default TitleForm;
