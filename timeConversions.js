function timeConversion(s) {

    const suffix = s.slice(-2);

    const hour = suffix === 'PM' && s.slice(0, 2) !== '12'
        ? parseInt(s.slice(0, 2)) + 12
        : s.slice(0, 2);

    const militaryTime = suffix === 'AM' && s.slice(0, 2) === '12'
        ? s.slice(0, -2).replace(s.slice(0, 2), '00')
        : s.slice(0, -2).replace((s.slice(0, 2)), hour.toString());

    return militaryTime;
}

timeConversion("07:05:45PM")