import React from "react";
import Image from "../assets/image.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function Navbar() {
  return (
    <div>
      <nav className="py-8 px-2 bg-[#e74640] space-x-4 flex justify-between items-center text-black">
        <div className="text-xl flex ml-10 font-bold">
          {/* <img className="w-11 h-11 rounded-lg" src={Image} /> */}
          <div className="ml-20 py-3 text-2xl ">
            Credex
          </div>
        </div>

        <div>
          <Dialog>
            <DialogTrigger>
              <button className="bg-white px-6 mb-2 py-3 mr-10   text-black rounded-full shadow-md  transition-all duration-300">
                Sign in
              </button>
            </DialogTrigger>
            <DialogContent className="bg-black text-black border border-white/60">
              <DialogHeader>
                <DialogTitle className="text-gray-100 font-semibold ">Are you absolutely sure?</DialogTitle>
                <DialogDescription className="text-gray-400">
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </nav>

    </div>
  );
}

export default Navbar;
