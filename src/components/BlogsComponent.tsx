



export default function BlogsContent() {
    return (
        <>
            <div className="space-y-2 md:space-y-5 ">
                <BlogsComponent
                    heading="The Creation of the World"
                    date="(Friday, 25 August 2023)"
                    footer="And the earth was without form, and void; and  void; and darkness  darkness"

                />
                <BlogsComponent
                    heading="The Creation of the World"
                    date="(Friday, 25 August 2023)"
                    footer="And the earth was without form, and void; and  void; and darkness  darkness"

                />
                <BlogsComponent
                    heading="The Creation of the World"
                    date="(Friday, 25 August 2023)"
                    footer="And the earth was without form, and void; and  void; and darkness  darkness"

                />
                <BlogsComponent
                    heading="The Creation of the World"
                    date="(Friday, 25 August 2023)"
                    footer="And the earth was without form, and void; and  void; and darkness  darkness"

                />
                <BlogsComponent
                    heading="The Creation of the World"
                    date="(Friday, 25 August 2023)"
                    footer="And the earth was without form, and void; and  void; and darkness  darkness"

                />
                <BlogsComponent
                    heading="The Creation of the World"
                    date="(Friday, 25 August 2023)"
                    footer="And the earth was without form, and void; and  void; and darkness  darkness"
                />
            </div >
        </>
    )
}


import { Card, CardContent } from "./ui/card";

type Props = {
    heading: React.ReactNode;
    date: React.ReactNode;
    footer: React.ReactNode;
    className?: string;
};

export function BlogsComponent({ heading, date, footer }: Props) {
    return (
        <Card className="bg-white w-full">
            <CardContent>
                <div className="md:space-y-1">
                    <div className="flex gap-1  items-center">
                        <h1 className="font-bold text-lg md:text-2xl lg:text-xs  font-roman text-primary-dark/80 xl:text-xl" >
                            {heading}
                        </h1>
                        <p className="font-normal text-xs md:text-base font-inter lg:text-[7px] text-primary-dark xl:text-xs">
                            {date}
                        </p>
                    </div>
                    <div className="text-sm font-normal font-roman text-ellipsis whitespace-nowrap overflow-hidden">
                        {footer}
                    </div>

                </div>
            </CardContent>
        </Card >
    );
}