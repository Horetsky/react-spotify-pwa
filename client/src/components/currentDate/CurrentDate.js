import { useMemo } from "react";

const CurrentDate = () => {
    const getDate = () => {
        const   currentDate = new Date(),
                weekDay = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота'],
                months = ['Січня', 'Лютого', 'Березня', 'Квітня', 'Травня', 'Червня', 'Липня', 'Серпня', 'Вересня', 'Жовтня', 'Листопада', 'Грудня'];

        return `${weekDay[currentDate.getDay()]}, ${currentDate.getDate()} ${months[currentDate.getMonth()]}`
    }

    const currentDate = useMemo(() => {
        return getDate()
    }, [getDate])
    return (
        <span className="date">
            {currentDate}
        </span>
    );
};

export default CurrentDate;