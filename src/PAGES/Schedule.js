import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Row } from "../COMPONENTS/Row";
import { Image } from "../COMPONENTS/Image";
//
import img1 from "../IMAGES/MAIN/stock2.jpg";
import {
  appointmentTypes,
  c_businessName,
  c_footer,
  c_nav,
  contactTemplateID,
  routes,
  scheduleHours,
} from "../Constants";
import { Spacer } from "../COMPONENTS/Spacer";
import { Group } from "../COMPONENTS/Group";
import { DatePicker } from "../COMPONENTS/DatePicker";
import Dropdown from "../COMPONENTS/Dropdown";
import { Button1 } from "../COMPONENTS/Button";
import {
  firebase_CreateDocument,
  firebase_GetAllDocuments,
  firebase_GetAllDocumentsListener,
  firebase_GetAllDocumentsMultipleQueries,
  function_FormatDateLong,
  function_GetDayOfWeek,
  function_RemoveDuplicates,
  function_sendEmail,
  randomString,
} from "../Global";
import { Grid } from "../COMPONENTS/Grid";
import { Clickable } from "../COMPONENTS/Clickable";
import { HiXMark } from "react-icons/hi2";
import { Textfield } from "../COMPONENTS/Textfield";
import Loading from "../UTILITIES/Loading";

export function Schedule1() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [availSlots, setAvailSlots] = useState([]);
  const [chosenSlot, setChosenSlot] = useState({});
  //
  const [showReview, setShowReview] = useState(false);
  //
  function onGetTimeSlotsPress() {
    const newDateStr = selectedDate.replaceAll("-", "/");
    const dayOfWeek = function_GetDayOfWeek(new Date(newDateStr));
    
    const hours = scheduleHours[dayOfWeek];
    const startHour = hours.split("-")[0];
    const endHour = hours.split("-")[1];
    const startDate = new Date(newDateStr).setHours(
      parseInt(startHour.split(":")[0]),
      parseInt(startHour.split(":")[1]),
      0,
      0
    );
    const endDate = new Date(newDateStr).setHours(
      parseInt(endHour.split(":")[0]),
      parseInt(endHour.split(":")[1]),
      0,
      0
    );

    const start = new Date(startDate);
    const end = new Date(endDate);

    firebase_GetAllDocuments(
      setLoading,
      "Appointments",
      (allAppts) => {
        const filtered = allAppts.filter(
          (ting) => new Date(ting.Date.seconds * 1000) < end
        );

        // GET SLOTS
        const chosenService = appointmentTypes.find(
          (ting) => ting.Service === selectedService
        );
        console.log(chosenService);
        const slots = [];

        // Generate slots every 30 minutes from 8:00 to 18:00
        let currentTime = start; // Start time
        const endTime = end; // End time

        while (currentTime < endTime) {
          const slotEnd = new Date(
            currentTime.getTime() + chosenService.Duration * 60 * 1000
          ); // Adding duration
          let slotAvailable = true;

          // Check if the slot overlaps with any appointment
          for (let i = 0; i < filtered.length; i++) {
            const appt = filtered[i];
            const apptStart = new Date(appt.Date.seconds * 1000);
            const apptEnd = new Date(
              apptStart.getTime() + appt.Duration * 60 * 1000
            ); // Adding duration in milliseconds

            if (!(currentTime >= apptEnd || slotEnd <= apptStart)) {
              // Slot overlaps with appointment, mark as unavailable
              slotAvailable = false;
              break; // No need to check further
            }
          }

          if (slotAvailable) {
            // Slot is available, add it to the slots array
            slots.push({
              start: currentTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
              end: slotEnd.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
            });
          }

          currentTime = slotEnd; // Move to the next slot
        }

        setAvailSlots(slots);
      },
      0,
      "asc",
      "Date",
      "Date",
      ">=",
      start
    );
  }
  function onSelectSlotPress(slot) {
    setChosenSlot(slot);
    const date = new Date(selectedDate.replaceAll("-", "/")).setHours(
      parseInt(slot.start.split(":")[0]),
      parseInt(slot.start.split(":")[1]),
      0,
      0
    );
    const chosenDate = new Date(date);
    const chosenService = appointmentTypes.find(
      (ting) => ting.Service === selectedService
    );

    setShowReview(true);
  }
  function onConfirmAppointment() {
    if (name !== "" && email !== "" && phone !== "") {
      setLoading(true);
      const suffix = chosenSlot.start.split(" ")[1];
      const date = new Date(selectedDate.replaceAll("-", "/")).setHours(
        suffix === "PM"
          ? parseInt(chosenSlot.start.split(":")[0]) + 12
          : parseInt(chosenSlot.start.split(":")[0]),
        parseInt(chosenSlot.start.split(":")[1]),
        0,
        0
      );
      const newDate = new Date(date);
      firebase_CreateDocument(
        {
          Date: newDate,
          Duration: appointmentTypes.find(
            (ting) => ting.Service === selectedService
          ).Duration,
          Name: name,
          Phone: phone,
          Service: appointmentTypes.find(
            (ting) => ting.Service === selectedService
          ).Service,
          Email: email,
        },
        "Appointments",
        randomString(25)
      );
      function_sendEmail(
        email,
        "Booking Confirmation",
        <div>
          <h1>Thank you for booking with {c_businessName}.</h1>
          <div style={{ padding: "1em", backgroundColor: "rgba(0,0,0,0.08)" }}>
            <p>
              You are confirmed for{" "}
              <b>
                {
                  appointmentTypes.find(
                    (ting) => ting.Service === selectedService
                  ).Service
                }
              </b>{" "}
              on{" "}
              <b>
                {function_FormatDateLong(
                  new Date(selectedDate.replaceAll("-", "/"))
                )}
              </b>{" "}
              at <b>{chosenSlot.start}</b>
            </p>
          </div>
          <br />
          <p>
            If you have any questions, feel free to use our contact form or any
            of our other contact methods.
          </p>
        </div>,
        contactTemplateID
      ).then(() => {
        setLoading(false);
        setShowReview(false);
        setEmail("");
        setPhone("");
        setName("");
        setSelectedCategory("");
        setSelectedDate("");
        setSelectedService("");
        setAvailSlots([])
        alert(
          "Confirmed! We look forward to seeing you on your appointment date and time."
        );
      });
    } else {
        alert("Please fill out all details for booking.")
    }
  }

  const [name, setName] = useState("");
  function onTypeName(text) {
    setName(text);
  }
  const [phone, setPhone] = useState("");
  function onTypePhone(text) {
    setPhone(text);
  }
  const [email, setEmail] = useState("");
  function onTypeEmail(text) {
    setEmail(text);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = routes.find(
      (route) => `/${route.path}` === location.pathname
    ).title;
  }, []);

  return (
    <div className="fade_in roboto">
      {loading && <Loading />}
      {routes.find((route) => `/${route.path}` === location.pathname).Helmet}
      {c_nav()}
      <Spacer height={"4vh"} />
      <Row classes={"padding"}>
        <Group>
          <h1 className="xxlarge_text no_margin all_caps bold kerning">
            Book your appointment
          </h1>
        </Group>
      </Row>
      <Row classes={"padding"}>
        <Group>
          <p className="small_text no_margin padding_v_small">Pick a date:</p>
          <DatePicker id={"dpDate"} setter={setSelectedDate} />
        </Group>
        <Group>
          <p className="small_text no_margin padding_v_small">
            Pick a category:
          </p>
          <Dropdown
            options={function_RemoveDuplicates(
              appointmentTypes.map((ting) => {
                return ting.Category;
              })
            )}
            id={"ddCategories"}
            setter={setSelectedCategory}
          />
        </Group>
        <Group>
          <p className="small_text no_margin padding_v_small">
            Pick a service:
          </p>
          <Dropdown
            options={appointmentTypes
              .filter((ting) => ting.Category === selectedCategory)
              .map((ting) => {
                return ting.Service;
              })}
            id={"ddServices"}
            setter={setSelectedService}
          />
        </Group>
        <Group>
          {selectedDate !== "" &&
            selectedService !== "" &&
            selectedCategory !== "" && (
              <Button1
                text={"Get Time Slots"}
                textSize={14}
                width={"100%"}
                backgroundColor={"black"}
                textColor={"white"}
                onClick={onGetTimeSlotsPress}
              />
            )}
        </Group>
      </Row>
      <Spacer height={"1em"} />
      {availSlots.length > 0 && (
        <Row>
          <Group>
            <h1 className="no_margin padding_h">Available slots</h1>
          </Group>
        </Row>
      )}
      {availSlots.length === 0 &&
        selectedCategory !== "" &&
        selectedDate !== "" &&
        selectedService !== "" && (
          <p className="no_margin padding_h">No available slots.</p>
        )}
      <Row classes={"padding"}>
        {availSlots.map((slot, i) => {
          return (
            <Group
              key={i}
              backgroundColor={"rgba(0,0,0,0.05)"}
              classes={"radius pointer"}
            >
              <Clickable
                classes={"center_vertical center_horizontal padding_h"}
                onClick={() => {
                  onSelectSlotPress(slot);
                }}
              >
                <p className="medsmall_text">{slot.start}</p>
              </Clickable>
            </Group>
          );
        })}
      </Row>
      {showReview && (
        <div
          className="fixed top bottom left right separate_vertical"
          style={{ background: "rgba(0,0,0,0.8)" }}
        >
          <div>
            <Clickable
              onClick={() => {
                setShowReview(false);
              }}
            >
              <HiXMark
                className="fixed right padding"
                size={"50px"}
                color="white"
              />
            </Clickable>
          </div>
          {/* BOX */}
          <div
            className="center bg_white padding scrollY"
            style={{ width: "40vw" }}
          >
            <p className="no_margin medsmall_text bold">Booking details:</p>
            <p className="padding_v no_margin">
              Please, review these appointment details before continuing.
            </p>
            <p className="no_margin center_text medium_text bold">
              {function_FormatDateLong(
                new Date(selectedDate.replaceAll("-", "/"))
              )}
            </p>
            <p className="no_margin center_text medsmall_text">
              {selectedService}
            </p>
            <p className="center_text">
              @ <span className="bold medsmall_text">{chosenSlot.start}</span>
            </p>
            <Spacer height={"15px"} />
            <div className="vertical">
              <Textfield
                placeholder={"Name"}
                id={"tbName"}
                setter={setName}
                onTyping={onTypeName}
              />
              <Textfield
                placeholder={"Email"}
                id={"tbEmail"}
                setter={setEmail}
                onTyping={onTypeEmail}
              />
              <Textfield
                placeholder={"Phone"}
                id={"tbPhone"}
                setter={setPhone}
                onTyping={onTypePhone}
              />
              <Button1
                text={"Confirm"}
                textSize={"14px"}
                onClick={onConfirmAppointment}
              />
            </div>
          </div>
          {/*  */}
          <div></div>
        </div>
      )}
      {c_footer()}
    </div>
  );
}
