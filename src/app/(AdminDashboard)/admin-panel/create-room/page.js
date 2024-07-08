"use client";
import React, { useContext, useEffect } from "react";
import AdminDashBordLayout from "../../../../components/clientComponents/layouts/AdminDashBordLayout";
import PageHeader from "../../../../components/clientComponents/layouts/pageHeader";
import { RoomTypeContext } from "../../../../contextApi/RoomTypeContextApi";
import { AppContext } from "../../../../contextApi/AppContextApi";
import {
  UpdateRoomForm,
  createRooomsForm,
} from "../../../../JsonData/projectdata";
import TwoColumLayOut from "../../../../components/clientComponents/dashbord/TwoColumLayOut";
import {
  roomTypeColumns,
  handleCheckboxChange,
} from "../../../../JsonData/tableData";
import EditModel from "../../../../components/clientComponents/models/EditModel";

export default function CreateRoomType() {
  const {
    allRoomTypes,
    handelGetAll,
    toggleAction,
    handelCreateNewRoom,
    handelDeleteRoom,
    handelUpdateRoom,
  } = useContext(RoomTypeContext);

  console.log(allRoomTypes);

  const { handelEdiFormOpen, editForm, editModelData, handelClodeEditModel } =
    useContext(AppContext);

  useEffect(() => {
    handelGetAll();
  }, [toggleAction]);

  return (
    <div>
      <AdminDashBordLayout>
        {editForm && (
          <EditModel
            modeldata={editModelData}
            sideFormFiled={UpdateRoomForm}
            formHandel={handelUpdateRoom}
            handelColseModel={handelClodeEditModel}
          />
        )}
        <PageHeader />
        <div>
          <TwoColumLayOut
            tablecolums={roomTypeColumns}
            tableData={allRoomTypes}
            deleteHandel={handelDeleteRoom}
            edithandel={handelEdiFormOpen}
            checkboxhandler={handleCheckboxChange}
            sideFormFiled={createRooomsForm}
            formHandel={handelCreateNewRoom}
            dataloading={toggleAction}
          />
        </div>
      </AdminDashBordLayout>
    </div>
  );
}
