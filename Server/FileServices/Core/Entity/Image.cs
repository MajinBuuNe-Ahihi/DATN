﻿namespace FileServices.Core.Entity
{
    public class Image : BaseEntity
    {
        public int ImageID { get; set; }
        public int ImageExtension { get; set; }
        public int Action { get; set; }
    }
}