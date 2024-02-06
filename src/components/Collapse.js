import React from "react";
import { Collapse, Card, CardBody } from "@material-tailwind/react";

export default function CollapseDefault() {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <button
        onClick={toggleOpen}
        className=" flex justify-between items-center h-[5rem] w-[40rem] text-[1.3rem] font-[500] text-gray-600"
      >
        Any tips for a first-time investor on Wefunder?
        <span class="material-symbols-outlined">expand_more</span>
      </button>
      <Collapse open={open}>
        <Card className=" mx-auto w-8/12">
          <CardBody>
            <ol className="list-decimal">
              <li className=" text-[1.05rem] font-[500] mb-2 line leading-8">
                <p className=" text-start font-[700]">
                  Only invest what you can afford to lose.
                </p>
              </li>
              <li className=" text-[1.05rem] font-[500] mb-2 line leading-8  text-start">
                <span className="font-[700]">
                  Only invest in what you understand.
                </span>{" "}
                Preferably a product or mission that you love.
              </li>
              <li className=" text-[1.05rem] font-[500] mb-2 line leading-8  text-start">
                {" "}
                <span className="font-[700]">Do your research.</span> You also
                can ask the founders a question on their money profile.
              </li>
              <li className=" text-[1.05rem] font-[500] mb-2 line leading-8  text-start">
                <span className="font-[700]">Diversify.</span> It's better to
                make multiple small investments rather than on large one. Plus,
                it'll help you learn more.
              </li>
              <li className=" text-[1.05rem] font-[500] mb-2 line leading-8  text-start">
                <span className="font-[700]">Look at the Lead Investor.</span>{" "}
                Has a more experienced investor invested in the company under
                the same terms as you? Why are they investing?
              </li>
            </ol>
            <p className=" mt-5 text-[1.05rem] font-[500] mb-5 line leading-8  text-start">
              Note that these are tips, not investment recommendations. You
              should make your own decisions when deciding what to invest in.
            </p>
          </CardBody>
        </Card>
      </Collapse>
    </>
  );
}
