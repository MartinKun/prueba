"use client";

import React, { useEffect, useState } from "react";
import { SubmitButton } from "@/components/form/SubmitButton";
import { Input } from "@/components/form/Input";
import { Select } from "@/components/form/Select";
import { newFieldInputFields, newFieldSelectFields } from "@/utils/inputFields";
import { useRouter } from "next/navigation";
import { isDecimal, isPositiveInteger } from "@/utils/validators";
import dynamic from "next/dynamic";

const MapView = dynamic(() => import("../../components/MapView"), {
  ssr: false,
});

const CreateField: React.FC = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    latitude: "",
    longitude: "",
    size: "",
    workersAmount: "",
    mainCrop: "",
    weatherType: "",
    administration: "",
    season: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newField = {
      userId: 1,
      name: form.name,
      latitude: parseFloat(form.latitude),
      longitude: parseFloat(form.longitude),
      size: parseFloat(form.size),
      workersAmount: parseFloat(form.workersAmount),
      mainCrop: form.mainCrop,
      weatherType: form.weatherType,
      administration: form.administration,
      season: form.season,
    };

    console.log(newField);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        setForm((prev) => ({
          ...prev,
          latitude: coords.latitude + "",
          longitude: coords.longitude + "",
        }));
      });
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;

    if ((name === "latitude" || name === "longitude") && !isDecimal(value))
      return;

    if (
      (name === "size" || name === "workersAmount") &&
      !isPositiveInteger(value)
    )
      return;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <h3
        className="text-black
                   text-[21px]
                   md:text-[25px]
                   font-[400]
                   mt-[42px]"
      >
        Agregar Campo
      </h3>

      <form
        className="w-[298px]
                   m-auto
                   mt-[36px]
                   md:mt-[77px]
                   space-y-3
                   md:space-y-4"
        onSubmit={handleSubmit}
      >
        {newFieldInputFields.slice(0, 3).map((field, index) => (
          <div className="relative" key={index + 1}>
            <Input
              label={field.label}
              name={field.name}
              value={form[field.name as keyof typeof form]}
              type={"text"}
              handleChange={handleChange}
            />
          </div>
        ))}

        <MapView
          latitude={parseFloat(form.latitude)}
          longitude={parseFloat(form.longitude)}
        />

        {newFieldInputFields.slice(3, 5).map((field, index) => (
          <div className="relative" key={index + 1}>
            <Input
              label={field.label}
              name={field.name}
              value={form[field.name as keyof typeof form]}
              type={"text"}
              handleChange={handleChange}
            />
          </div>
        ))}

        {newFieldSelectFields.map((field, index) => (
          <Select
            key={index}
            name={field.name}
            handleChange={handleChange}
            value={form[field.name as keyof typeof form]}
            options={field.options}
          />
        ))}

        <div className="pt-4">
          <SubmitButton value="Agregar" />
        </div>
      </form>
    </div>
  );
};

export default CreateField;
