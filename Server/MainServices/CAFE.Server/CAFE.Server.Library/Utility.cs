using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace CAFE.Server.Library
{
    /// <summary>
    /// helper cho dự án
    /// </summary>
    public static class Utility
    {

        static DateTime ConvertToTimeZone(DateTime inputTime, string targetTimeZoneId)
        {
            TimeZoneInfo sourceTimeZone = TimeZoneInfo.Utc;

            if (targetTimeZoneId.StartsWith("UTC+"))
            {
                int offsetHours = int.Parse(targetTimeZoneId.Substring(4));

                sourceTimeZone = TimeZoneInfo.CreateCustomTimeZone(targetTimeZoneId, TimeSpan.FromHours(offsetHours), targetTimeZoneId, targetTimeZoneId);
            }
            DateTime targetTime = TimeZoneInfo.ConvertTime(inputTime, sourceTimeZone, TimeZoneInfo.Utc);

            return targetTime;
        }
    }
}
