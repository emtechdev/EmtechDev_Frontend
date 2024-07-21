import React from 'react'
import Navbar from "./Navbar/Navbar";
import Navbar_second from "./Navbar/Navbar_second";

function CP2E_S60DT1_D() {
  return (
    <>
    <Navbar/>
    <Navbar_second/>
    <div className="container mx-auto">
      <div className="flex flex-wrap">
        <div className="md:w-1/2">
          <h1 className="mt-12 max-w-5xl font-open-sans text-4xl text-gray-800">CP2E-S60DT1-D</h1>
          <p className="text-lg font-sans text-blue-800">description</p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://emtech-eg.com/static/uploads/CP2E-S60DT1-D.jpg"
            alt="model"
            className="w-72 h-72"
          />
          <div className="pdf mt-4">
            <a href="#">
              <img
                src="https://8z1xg04k.tinifycdn.com/downloads/datasheet/en/thumb/cj2m-cpu_,_-md21_cpu_units,_pulse_i_o_modules_datasheet_en.jpg"
                alt="pdf"
                className="w-12 h-12"
              />
            </a>
            <a
              href="https://drive.google.com/file/d/1ACWsTWGqD3FvdxiHznqQAr9rEoth3FPd/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-blue-800 underline"
            >
              CJ2M-CPU__, -MD21_ CPU Units, Pulse I/O Modules <span>DataSheet</span>
            </a>
          </div>
          <div className="pdf mt-4">
            <a href="#">
              <img
                src="https://8z1xg04k.tinifycdn.com/downloads/datasheet/en/thumb/cj2m-cpu_,_-md21_cpu_units,_pulse_i_o_modules_datasheet_en.jpg"
                alt="pdf"
                className="w-12 h-12"
              />
            </a>
            <a
              href="https://drive.google.com/file/d/1ACWsTWGqD3FvdxiHznqQAr9rEoth3FPd/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-blue-800 underline"
            >
              CJ2M-CPU__, -MD21_ CPU Units, Pulse I/O Modules <span>DataSheet</span>
            </a>
          </div>
        </div>
      </div>
      <br />
      <table className="table-auto w-full mt-8 min-w-full divide-y divide-gray-200">
        <tbody id="productTableBody">
          <tr className="border-b">
            <th className="text-left p-2">Brand</th>
            <td className="p-2">Omron</td>
          </tr>
          <tr className="border-b">
            <th className="text-left p-2">Model</th>
            <td className="p-2">CP2E-S60DT1-D</td>
          </tr>
          <tr className="border-b">
            <th className="text-left p-2">Origin</th>
            <td className="p-2">China</td>
          </tr>
          <tr className="border-b">
            <th className="text-left p-2">Series</th>
            <td className="p-2">CP2E</td>
          </tr>
          <tr className="border-b">
            <th className="text-left p-2">Digital Input</th>
            <td className="p-2">24</td>
          </tr>
          <tr className="border-b">
            <th className="text-left p-2">Analog Input</th>
            <td className="p-2">12</td>
          </tr>
          <tr className="border-b">
            <th className="text-left p-2">Digital Output</th>
            <td className="p-2">0</td>
          </tr>
          <tr className="border-b">
            <th className="text-left p-2">Analog Output</th>
            <td className="p-2">0</td>
          </tr>
          <tr className="border-b">
            <th className="text-left p-2">Input Voltage</th>
            <td className="p-2">220</td>
          </tr>
          <tr className="border-b">
            <th className="text-left p-2">Communication</th>
            <td className="p-2">Eccc</td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  )
}

export default CP2E_S60DT1_D;