function TravelDays({day, date, image}) {
    return(
        <div className="w-full flex justify-center my-10">
                <div className="w-[90%] flex flex-col md:flex-row rounded-xl p-4 md:p-6 gap-6">
                  {/* Day Tag */}
                  <div className="bg-[#321E5D] text-white font-bold text-lg rounded-[32px] w-16 h-16 md:h-auto flex items-center justify-center self-center md:self-auto">
                    <span className="rotate-[-90deg] md:rotate-[-90deg] whitespace-nowrap">
                      Day {day}
                    </span>
                  </div>
        
                  {/* Image and Title */}
                  <div className="flex flex-col items-center md:w-1/3 w-full">
                    <img
                      src={image}
                      alt="Singapore"
                      className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
                    />
                    <p
                      style={{ fontFamily: "Roboto" }}
                      className="font-[700] text-lg md:text-xl mt-4 text-center"
                    >
                      {date}th November
                    </p>
                    <p
                      style={{ fontFamily: "Roboto" }}
                      className="font-[400] text-center text-sm text-[#000000] px-2"
                    >
                      Arrival in Singapore & City Exploration
                    </p>
                  </div>
        
                  {/* Timeline */}
                  <div className="flex flex-col w-full md:w-5/8 relative pl-6 md:pl-10">
                    {/* Vertical timeline line */}
                    <div className="absolute left-4 top-5 bottom-14 w-0.5 bg-[#2F80ED] hidden md:block"></div>
        
                    {/* Morning */}
                    <div
                      style={{ fontFamily: "Roboto" }}
                      className="flex gap-4 items-start relative mb-8"
                    >
                      <div className="absolute left-[-26px] md:left-[-31px] top-1 w-4 h-4 border-[3px] border-[#541C9C] bg-white rounded-full z-10 hidden md:block"></div>
                      <div className="min-w-[80px] md:w-24 font-[700] text-black text-base md:text-xl">
                        Morning
                      </div>
                      <ul className="text-sm list-disc list-inside text-black font-[300] text-[15px] md:text-[16px]">
                        <li>Arrive In Singapore. Transfer From Airport To Hotel.</li>
                      </ul>
                    </div>
        
                    {/* Afternoon */}
                    <div
                      style={{ fontFamily: "Roboto" }}
                      className="flex gap-4 items-start relative mb-8"
                    >
                      <div className="absolute left-[-26px] md:left-[-31px] top-1 w-4 h-4 border-[3px] border-[#541C9C] bg-white rounded-full z-10 hidden md:block"></div>
                      <div className="min-w-[80px] md:w-24 font-[700] text-black text-base md:text-xl">
                        Afternoon
                      </div>
                      <ul className="text-sm list-disc list-inside text-black font-[300] text-[15px] md:text-[16px]">
                        <li>Check Into Your Hotel.</li>
                        <li>Visit Marina Bay Sands Sky Park (2–3 Hours).</li>
                        <li>
                          Optional: Stroll Along Marina Bay Waterfront Promenade Or
                          Helix Bridge.
                        </li>
                      </ul>
                    </div>
        
                    {/* Evening */}
                    <div
                      style={{ fontFamily: "Roboto" }}
                      className="flex gap-4 items-start relative"
                    >
                      <div className="absolute left-[-26px] md:left-[-31px] top-1 w-4 h-4 border-[3px] border-[#541C9C] bg-white rounded-full z-10 hidden md:block"></div>
                      <div className="min-w-[80px] md:w-24 font-[700] text-black text-base md:text-xl">
                        Evening
                      </div>
                      <ul className="text-sm list-disc list-inside text-black font-[300] text-[15px] md:text-[16px]">
                        <li>
                          Explore Gardens By The Bay, Including Super Tree Grove (3–4
                          Hours)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
    )
}

export default TravelDays;