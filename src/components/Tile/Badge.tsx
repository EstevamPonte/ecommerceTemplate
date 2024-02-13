function Badge({ name }: { name: string }) {
    return (
        <div className="p-2 m-2 bg-yellow-700 rounded-md text-white text-xs rounded-tl-none">
            <span className="badge__text">{name}</span>
        </div>
    );
}

export default Badge;
