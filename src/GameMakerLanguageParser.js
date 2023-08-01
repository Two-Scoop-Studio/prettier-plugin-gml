// Generated from GameMakerLanguageParser.g4 by ANTLR 4.13.0
// jshint ignore: start
import antlr4 from 'antlr4';
import GameMakerLanguageParserListener from './GameMakerLanguageParserListener.js';
import GameMakerLanguageParserVisitor from './GameMakerLanguageParserVisitor.js';

const serializedATN = [4, 1, 118, 688, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7,
	4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12,
	2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2,
	20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27,
	7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 2, 32, 7, 32, 2, 33, 7, 33, 2, 34, 7,
	34, 2, 35, 7, 35, 2, 36, 7, 36, 2, 37, 7, 37, 2, 38, 7, 38, 2, 39, 7, 39, 2, 40, 7, 40, 2, 41, 7, 41,
	2, 42, 7, 42, 2, 43, 7, 43, 2, 44, 7, 44, 2, 45, 7, 45, 2, 46, 7, 46, 2, 47, 7, 47, 2, 48, 7, 48, 2,
	49, 7, 49, 2, 50, 7, 50, 2, 51, 7, 51, 2, 52, 7, 52, 2, 53, 7, 53, 2, 54, 7, 54, 2, 55, 7, 55, 2, 56,
	7, 56, 2, 57, 7, 57, 2, 58, 7, 58, 2, 59, 7, 59, 2, 60, 7, 60, 2, 61, 7, 61, 2, 62, 7, 62, 2, 63, 7,
	63, 2, 64, 7, 64, 2, 65, 7, 65, 2, 66, 7, 66, 2, 67, 7, 67, 1, 0, 3, 0, 138, 8, 0, 1, 0, 1, 0, 1, 1, 4,
	1, 143, 8, 1, 11, 1, 12, 1, 144, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,
	1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 3, 2, 170, 8, 2, 1, 2, 3, 2, 173, 8, 2,
	1, 3, 1, 3, 3, 3, 177, 8, 3, 1, 3, 1, 3, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 186, 8, 4, 1, 5, 1, 5, 1, 5,
	1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 3, 5, 201, 8, 5, 1, 5, 1, 5, 3, 5, 205, 8, 5,
	1, 5, 1, 5, 3, 5, 209, 8, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 3, 5, 217, 8, 5, 1, 6, 1, 6, 1, 6, 1, 6,
	1, 7, 1, 7, 1, 7, 1, 7, 1, 8, 1, 8, 1, 9, 1, 9, 1, 10, 1, 10, 1, 11, 1, 11, 1, 12, 1, 12, 3, 12, 237, 8,
	12, 1, 12, 1, 12, 3, 12, 241, 8, 12, 3, 12, 243, 8, 12, 1, 12, 1, 12, 1, 13, 4, 13, 248, 8, 13, 11,
	13, 12, 13, 249, 1, 14, 1, 14, 1, 14, 1, 14, 3, 14, 256, 8, 14, 1, 15, 1, 15, 1, 15, 3, 15, 261, 8,
	15, 1, 16, 1, 16, 1, 16, 1, 17, 1, 17, 1, 17, 1, 17, 3, 17, 270, 8, 17, 1, 17, 3, 17, 273, 8, 17, 1,
	18, 1, 18, 1, 18, 3, 18, 278, 8, 18, 1, 18, 3, 18, 281, 8, 18, 1, 18, 1, 18, 1, 19, 1, 19, 1, 19, 1,
	20, 1, 20, 3, 20, 290, 8, 20, 1, 21, 1, 21, 1, 21, 1, 22, 1, 22, 1, 22, 1, 22, 1, 23, 1, 23, 1, 23,
	1, 23, 5, 23, 303, 8, 23, 10, 23, 12, 23, 306, 9, 23, 1, 24, 4, 24, 309, 8, 24, 11, 24, 12, 24, 310,
	1, 24, 3, 24, 314, 8, 24, 1, 25, 1, 25, 1, 25, 3, 25, 319, 8, 25, 1, 26, 1, 26, 1, 26, 1, 26, 5, 26,
	325, 8, 26, 10, 26, 12, 26, 328, 9, 26, 1, 26, 1, 26, 1, 27, 1, 27, 1, 27, 1, 27, 1, 28, 1, 28, 3,
	28, 338, 8, 28, 1, 29, 1, 29, 5, 29, 342, 8, 29, 10, 29, 12, 29, 345, 9, 29, 1, 29, 3, 29, 348, 8,
	29, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 3, 30, 357, 8, 30, 1, 31, 1, 31, 1, 31, 1, 31,
	1, 31, 1, 31, 3, 31, 365, 8, 31, 1, 32, 1, 32, 1, 32, 5, 32, 370, 8, 32, 10, 32, 12, 32, 373, 9, 32,
	1, 33, 1, 33, 3, 33, 377, 8, 33, 1, 33, 1, 33, 1, 33, 1, 33, 3, 33, 383, 8, 33, 1, 34, 1, 34, 1, 34,
	1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 3, 34, 400, 8, 34,
	1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1,
	34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34,
	1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 5, 34, 444,
	8, 34, 10, 34, 12, 34, 447, 9, 34, 1, 35, 1, 35, 1, 35, 3, 35, 452, 8, 35, 1, 35, 1, 35, 5, 35, 456,
	8, 35, 10, 35, 12, 35, 459, 9, 35, 1, 36, 1, 36, 1, 36, 1, 36, 3, 36, 465, 8, 36, 1, 36, 1, 36, 3,
	36, 469, 8, 36, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 3, 37, 476, 8, 37, 1, 38, 1, 38, 1, 39, 1, 39, 1,
	39, 1, 39, 5, 39, 484, 8, 39, 10, 39, 12, 39, 487, 9, 39, 1, 39, 3, 39, 490, 8, 39, 3, 39, 492, 8,
	39, 1, 39, 1, 39, 1, 40, 1, 40, 1, 41, 1, 41, 1, 41, 1, 41, 1, 41, 1, 41, 1, 41, 1, 41, 1, 41, 1, 41,
	1, 41, 1, 41, 3, 41, 510, 8, 41, 1, 42, 1, 42, 5, 42, 514, 8, 42, 10, 42, 12, 42, 517, 9, 42, 1, 42,
	1, 42, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 3, 43, 526, 8, 43, 1, 44, 1, 44, 1, 44, 1, 44, 1, 45, 5, 45,
	533, 8, 45, 10, 45, 12, 45, 536, 9, 45, 1, 45, 3, 45, 539, 8, 45, 1, 45, 4, 45, 542, 8, 45, 11, 45,
	12, 45, 543, 1, 45, 5, 45, 547, 8, 45, 10, 45, 12, 45, 550, 9, 45, 1, 45, 3, 45, 553, 8, 45, 1, 46,
	1, 46, 1, 46, 1, 46, 5, 46, 559, 8, 46, 10, 46, 12, 46, 562, 9, 46, 1, 46, 3, 46, 565, 8, 46, 3, 46,
	567, 8, 46, 1, 46, 1, 46, 1, 47, 1, 47, 1, 47, 1, 47, 1, 48, 1, 48, 1, 48, 3, 48, 578, 8, 48, 1, 49,
	1, 49, 1, 49, 3, 49, 583, 8, 49, 1, 50, 1, 50, 1, 50, 3, 50, 588, 8, 50, 1, 50, 1, 50, 1, 50, 1, 50,
	3, 50, 594, 8, 50, 1, 50, 3, 50, 597, 8, 50, 1, 51, 1, 51, 3, 51, 601, 8, 51, 1, 51, 1, 51, 1, 51,
	1, 52, 1, 52, 1, 52, 1, 52, 5, 52, 610, 8, 52, 10, 52, 12, 52, 613, 9, 52, 1, 52, 3, 52, 616, 8, 52,
	3, 52, 618, 8, 52, 1, 52, 1, 52, 1, 53, 1, 53, 1, 53, 3, 53, 625, 8, 53, 1, 54, 1, 54, 3, 54, 629,
	8, 54, 1, 55, 1, 55, 1, 55, 1, 55, 3, 55, 635, 8, 55, 1, 55, 1, 55, 1, 56, 1, 56, 1, 56, 5, 56, 642,
	8, 56, 10, 56, 12, 56, 645, 9, 56, 1, 56, 3, 56, 648, 8, 56, 1, 57, 1, 57, 1, 57, 3, 57, 653, 8, 57,
	1, 58, 1, 58, 1, 58, 4, 58, 658, 8, 58, 11, 58, 12, 58, 659, 1, 58, 1, 58, 1, 59, 1, 59, 1, 59, 1,
	59, 1, 60, 1, 60, 3, 60, 670, 8, 60, 1, 60, 1, 60, 1, 61, 1, 61, 1, 62, 1, 62, 1, 63, 1, 63, 1, 64,
	1, 64, 1, 65, 1, 65, 1, 66, 1, 66, 1, 67, 1, 67, 1, 67, 0, 2, 68, 70, 68, 0, 2, 4, 6, 8, 10, 12, 14,
	16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62,
	64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108,
	110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130, 132, 134, 0, 16, 1, 0, 30, 33, 1, 0, 26,
	27, 1, 0, 38, 39, 2, 0, 21, 21, 44, 45, 1, 0, 40, 43, 1, 0, 24, 25, 1, 0, 5, 10, 3, 0, 21, 21, 37, 37,
	52, 61, 2, 0, 66, 66, 68, 69, 1, 1, 112, 112, 1, 1, 115, 115, 1, 0, 105, 106, 2, 0, 97, 97, 99, 101,
	2, 0, 14, 14, 17, 17, 2, 0, 16, 16, 18, 18, 4, 0, 5, 98, 103, 103, 107, 110, 116, 118, 745, 0, 137,
	1, 0, 0, 0, 2, 142, 1, 0, 0, 0, 4, 169, 1, 0, 0, 0, 6, 174, 1, 0, 0, 0, 8, 180, 1, 0, 0, 0, 10, 216, 1,
	0, 0, 0, 12, 218, 1, 0, 0, 0, 14, 222, 1, 0, 0, 0, 16, 226, 1, 0, 0, 0, 18, 228, 1, 0, 0, 0, 20, 230,
	1, 0, 0, 0, 22, 232, 1, 0, 0, 0, 24, 234, 1, 0, 0, 0, 26, 247, 1, 0, 0, 0, 28, 251, 1, 0, 0, 0, 30, 257,
	1, 0, 0, 0, 32, 262, 1, 0, 0, 0, 34, 265, 1, 0, 0, 0, 36, 274, 1, 0, 0, 0, 38, 284, 1, 0, 0, 0, 40, 287,
	1, 0, 0, 0, 42, 291, 1, 0, 0, 0, 44, 294, 1, 0, 0, 0, 46, 298, 1, 0, 0, 0, 48, 313, 1, 0, 0, 0, 50, 315,
	1, 0, 0, 0, 52, 320, 1, 0, 0, 0, 54, 331, 1, 0, 0, 0, 56, 337, 1, 0, 0, 0, 58, 339, 1, 0, 0, 0, 60, 356,
	1, 0, 0, 0, 62, 364, 1, 0, 0, 0, 64, 366, 1, 0, 0, 0, 66, 382, 1, 0, 0, 0, 68, 399, 1, 0, 0, 0, 70, 448,
	1, 0, 0, 0, 72, 468, 1, 0, 0, 0, 74, 475, 1, 0, 0, 0, 76, 477, 1, 0, 0, 0, 78, 479, 1, 0, 0, 0, 80, 495,
	1, 0, 0, 0, 82, 509, 1, 0, 0, 0, 84, 511, 1, 0, 0, 0, 86, 525, 1, 0, 0, 0, 88, 527, 1, 0, 0, 0, 90, 534,
	1, 0, 0, 0, 92, 554, 1, 0, 0, 0, 94, 570, 1, 0, 0, 0, 96, 577, 1, 0, 0, 0, 98, 579, 1, 0, 0, 0, 100,
	584, 1, 0, 0, 0, 102, 598, 1, 0, 0, 0, 104, 605, 1, 0, 0, 0, 106, 621, 1, 0, 0, 0, 108, 628, 1, 0,
	0, 0, 110, 630, 1, 0, 0, 0, 112, 638, 1, 0, 0, 0, 114, 649, 1, 0, 0, 0, 116, 654, 1, 0, 0, 0, 118,
	663, 1, 0, 0, 0, 120, 667, 1, 0, 0, 0, 122, 673, 1, 0, 0, 0, 124, 675, 1, 0, 0, 0, 126, 677, 1, 0,
	0, 0, 128, 679, 1, 0, 0, 0, 130, 681, 1, 0, 0, 0, 132, 683, 1, 0, 0, 0, 134, 685, 1, 0, 0, 0, 136,
	138, 3, 2, 1, 0, 137, 136, 1, 0, 0, 0, 137, 138, 1, 0, 0, 0, 138, 139, 1, 0, 0, 0, 139, 140, 5, 0,
	0, 1, 140, 1, 1, 0, 0, 0, 141, 143, 3, 4, 2, 0, 142, 141, 1, 0, 0, 0, 143, 144, 1, 0, 0, 0, 144, 142,
	1, 0, 0, 0, 144, 145, 1, 0, 0, 0, 145, 3, 1, 0, 0, 0, 146, 170, 3, 6, 3, 0, 147, 170, 3, 22, 11, 0,
	148, 170, 3, 8, 4, 0, 149, 170, 3, 46, 23, 0, 150, 170, 3, 10, 5, 0, 151, 170, 3, 16, 8, 0, 152,
	170, 3, 18, 9, 0, 153, 170, 3, 40, 20, 0, 154, 170, 3, 12, 6, 0, 155, 170, 3, 14, 7, 0, 156, 170,
	3, 34, 17, 0, 157, 170, 3, 100, 50, 0, 158, 170, 3, 32, 16, 0, 159, 170, 3, 20, 10, 0, 160, 170,
	3, 116, 58, 0, 161, 170, 3, 118, 59, 0, 162, 170, 3, 120, 60, 0, 163, 170, 3, 110, 55, 0, 164,
	170, 3, 52, 26, 0, 165, 170, 3, 44, 22, 0, 166, 170, 3, 74, 37, 0, 167, 170, 3, 70, 35, 0, 168,
	170, 3, 102, 51, 0, 169, 146, 1, 0, 0, 0, 169, 147, 1, 0, 0, 0, 169, 148, 1, 0, 0, 0, 169, 149, 1,
	0, 0, 0, 169, 150, 1, 0, 0, 0, 169, 151, 1, 0, 0, 0, 169, 152, 1, 0, 0, 0, 169, 153, 1, 0, 0, 0, 169,
	154, 1, 0, 0, 0, 169, 155, 1, 0, 0, 0, 169, 156, 1, 0, 0, 0, 169, 157, 1, 0, 0, 0, 169, 158, 1, 0,
	0, 0, 169, 159, 1, 0, 0, 0, 169, 160, 1, 0, 0, 0, 169, 161, 1, 0, 0, 0, 169, 162, 1, 0, 0, 0, 169,
	163, 1, 0, 0, 0, 169, 164, 1, 0, 0, 0, 169, 165, 1, 0, 0, 0, 169, 166, 1, 0, 0, 0, 169, 167, 1, 0,
	0, 0, 169, 168, 1, 0, 0, 0, 170, 172, 1, 0, 0, 0, 171, 173, 3, 132, 66, 0, 172, 171, 1, 0, 0, 0, 172,
	173, 1, 0, 0, 0, 173, 5, 1, 0, 0, 0, 174, 176, 3, 128, 64, 0, 175, 177, 3, 2, 1, 0, 176, 175, 1, 0,
	0, 0, 176, 177, 1, 0, 0, 0, 177, 178, 1, 0, 0, 0, 178, 179, 3, 130, 65, 0, 179, 7, 1, 0, 0, 0, 180,
	181, 5, 92, 0, 0, 181, 182, 3, 68, 34, 0, 182, 185, 3, 4, 2, 0, 183, 184, 5, 76, 0, 0, 184, 186,
	3, 4, 2, 0, 185, 183, 1, 0, 0, 0, 185, 186, 1, 0, 0, 0, 186, 9, 1, 0, 0, 0, 187, 188, 5, 74, 0, 0, 188,
	189, 3, 4, 2, 0, 189, 190, 5, 87, 0, 0, 190, 191, 3, 68, 34, 0, 191, 217, 1, 0, 0, 0, 192, 193, 5,
	86, 0, 0, 193, 194, 3, 68, 34, 0, 194, 195, 3, 4, 2, 0, 195, 217, 1, 0, 0, 0, 196, 197, 5, 84, 0,
	0, 197, 200, 5, 12, 0, 0, 198, 201, 3, 46, 23, 0, 199, 201, 3, 44, 22, 0, 200, 198, 1, 0, 0, 0, 200,
	199, 1, 0, 0, 0, 200, 201, 1, 0, 0, 0, 201, 202, 1, 0, 0, 0, 202, 204, 5, 19, 0, 0, 203, 205, 3, 68,
	34, 0, 204, 203, 1, 0, 0, 0, 204, 205, 1, 0, 0, 0, 205, 206, 1, 0, 0, 0, 206, 208, 5, 19, 0, 0, 207,
	209, 3, 4, 2, 0, 208, 207, 1, 0, 0, 0, 208, 209, 1, 0, 0, 0, 209, 210, 1, 0, 0, 0, 210, 211, 5, 13,
	0, 0, 211, 217, 3, 4, 2, 0, 212, 213, 5, 88, 0, 0, 213, 214, 3, 68, 34, 0, 214, 215, 3, 4, 2, 0, 215,
	217, 1, 0, 0, 0, 216, 187, 1, 0, 0, 0, 216, 192, 1, 0, 0, 0, 216, 196, 1, 0, 0, 0, 216, 212, 1, 0,
	0, 0, 217, 11, 1, 0, 0, 0, 218, 219, 5, 90, 0, 0, 219, 220, 3, 68, 34, 0, 220, 221, 3, 4, 2, 0, 221,
	13, 1, 0, 0, 0, 222, 223, 5, 85, 0, 0, 223, 224, 3, 68, 34, 0, 224, 225, 3, 24, 12, 0, 225, 15, 1,
	0, 0, 0, 226, 227, 5, 83, 0, 0, 227, 17, 1, 0, 0, 0, 228, 229, 5, 72, 0, 0, 229, 19, 1, 0, 0, 0, 230,
	231, 5, 73, 0, 0, 231, 21, 1, 0, 0, 0, 232, 233, 5, 19, 0, 0, 233, 23, 1, 0, 0, 0, 234, 236, 3, 128,
	64, 0, 235, 237, 3, 26, 13, 0, 236, 235, 1, 0, 0, 0, 236, 237, 1, 0, 0, 0, 237, 242, 1, 0, 0, 0, 238,
	240, 3, 30, 15, 0, 239, 241, 3, 26, 13, 0, 240, 239, 1, 0, 0, 0, 240, 241, 1, 0, 0, 0, 241, 243,
	1, 0, 0, 0, 242, 238, 1, 0, 0, 0, 242, 243, 1, 0, 0, 0, 243, 244, 1, 0, 0, 0, 244, 245, 3, 130, 65,
	0, 245, 25, 1, 0, 0, 0, 246, 248, 3, 28, 14, 0, 247, 246, 1, 0, 0, 0, 248, 249, 1, 0, 0, 0, 249, 247,
	1, 0, 0, 0, 249, 250, 1, 0, 0, 0, 250, 27, 1, 0, 0, 0, 251, 252, 5, 75, 0, 0, 252, 253, 3, 68, 34,
	0, 253, 255, 5, 22, 0, 0, 254, 256, 3, 2, 1, 0, 255, 254, 1, 0, 0, 0, 255, 256, 1, 0, 0, 0, 256, 29,
	1, 0, 0, 0, 257, 258, 5, 91, 0, 0, 258, 260, 5, 22, 0, 0, 259, 261, 3, 2, 1, 0, 260, 259, 1, 0, 0,
	0, 260, 261, 1, 0, 0, 0, 261, 31, 1, 0, 0, 0, 262, 263, 5, 93, 0, 0, 263, 264, 3, 68, 34, 0, 264,
	33, 1, 0, 0, 0, 265, 266, 5, 95, 0, 0, 266, 272, 3, 4, 2, 0, 267, 269, 3, 36, 18, 0, 268, 270, 3,
	38, 19, 0, 269, 268, 1, 0, 0, 0, 269, 270, 1, 0, 0, 0, 270, 273, 1, 0, 0, 0, 271, 273, 3, 38, 19,
	0, 272, 267, 1, 0, 0, 0, 272, 271, 1, 0, 0, 0, 273, 35, 1, 0, 0, 0, 274, 280, 5, 80, 0, 0, 275, 277,
	5, 12, 0, 0, 276, 278, 3, 108, 54, 0, 277, 276, 1, 0, 0, 0, 277, 278, 1, 0, 0, 0, 278, 279, 1, 0,
	0, 0, 279, 281, 5, 13, 0, 0, 280, 275, 1, 0, 0, 0, 280, 281, 1, 0, 0, 0, 281, 282, 1, 0, 0, 0, 282,
	283, 3, 4, 2, 0, 283, 37, 1, 0, 0, 0, 284, 285, 5, 81, 0, 0, 285, 286, 3, 4, 2, 0, 286, 39, 1, 0, 0,
	0, 287, 289, 5, 82, 0, 0, 288, 290, 3, 68, 34, 0, 289, 288, 1, 0, 0, 0, 289, 290, 1, 0, 0, 0, 290,
	41, 1, 0, 0, 0, 291, 292, 5, 94, 0, 0, 292, 293, 3, 68, 34, 0, 293, 43, 1, 0, 0, 0, 294, 295, 3, 58,
	29, 0, 295, 296, 3, 80, 40, 0, 296, 297, 3, 66, 33, 0, 297, 45, 1, 0, 0, 0, 298, 299, 3, 48, 24,
	0, 299, 304, 3, 50, 25, 0, 300, 301, 5, 20, 0, 0, 301, 303, 3, 50, 25, 0, 302, 300, 1, 0, 0, 0, 303,
	306, 1, 0, 0, 0, 304, 302, 1, 0, 0, 0, 304, 305, 1, 0, 0, 0, 305, 47, 1, 0, 0, 0, 306, 304, 1, 0, 0,
	0, 307, 309, 5, 78, 0, 0, 308, 307, 1, 0, 0, 0, 309, 310, 1, 0, 0, 0, 310, 308, 1, 0, 0, 0, 310, 311,
	1, 0, 0, 0, 311, 314, 1, 0, 0, 0, 312, 314, 5, 98, 0, 0, 313, 308, 1, 0, 0, 0, 313, 312, 1, 0, 0, 0,
	314, 49, 1, 0, 0, 0, 315, 318, 3, 108, 54, 0, 316, 317, 5, 21, 0, 0, 317, 319, 3, 66, 33, 0, 318,
	316, 1, 0, 0, 0, 318, 319, 1, 0, 0, 0, 319, 51, 1, 0, 0, 0, 320, 321, 5, 79, 0, 0, 321, 326, 3, 108,
	54, 0, 322, 323, 5, 20, 0, 0, 323, 325, 3, 108, 54, 0, 324, 322, 1, 0, 0, 0, 325, 328, 1, 0, 0, 0,
	326, 324, 1, 0, 0, 0, 326, 327, 1, 0, 0, 0, 327, 329, 1, 0, 0, 0, 328, 326, 1, 0, 0, 0, 329, 330,
	5, 19, 0, 0, 330, 53, 1, 0, 0, 0, 331, 332, 5, 77, 0, 0, 332, 333, 3, 108, 54, 0, 333, 334, 3, 78,
	39, 0, 334, 55, 1, 0, 0, 0, 335, 338, 3, 108, 54, 0, 336, 338, 3, 54, 27, 0, 337, 335, 1, 0, 0, 0,
	337, 336, 1, 0, 0, 0, 338, 57, 1, 0, 0, 0, 339, 347, 3, 56, 28, 0, 340, 342, 3, 60, 30, 0, 341, 340,
	1, 0, 0, 0, 342, 345, 1, 0, 0, 0, 343, 341, 1, 0, 0, 0, 343, 344, 1, 0, 0, 0, 344, 346, 1, 0, 0, 0,
	345, 343, 1, 0, 0, 0, 346, 348, 3, 62, 31, 0, 347, 343, 1, 0, 0, 0, 347, 348, 1, 0, 0, 0, 348, 59,
	1, 0, 0, 0, 349, 350, 3, 76, 38, 0, 350, 351, 3, 64, 32, 0, 351, 352, 5, 11, 0, 0, 352, 357, 1, 0,
	0, 0, 353, 354, 5, 23, 0, 0, 354, 357, 3, 108, 54, 0, 355, 357, 3, 78, 39, 0, 356, 349, 1, 0, 0,
	0, 356, 353, 1, 0, 0, 0, 356, 355, 1, 0, 0, 0, 357, 61, 1, 0, 0, 0, 358, 359, 3, 76, 38, 0, 359, 360,
	3, 64, 32, 0, 360, 361, 5, 11, 0, 0, 361, 365, 1, 0, 0, 0, 362, 363, 5, 23, 0, 0, 363, 365, 3, 108,
	54, 0, 364, 358, 1, 0, 0, 0, 364, 362, 1, 0, 0, 0, 365, 63, 1, 0, 0, 0, 366, 371, 3, 68, 34, 0, 367,
	368, 5, 20, 0, 0, 368, 370, 3, 68, 34, 0, 369, 367, 1, 0, 0, 0, 370, 373, 1, 0, 0, 0, 371, 369, 1,
	0, 0, 0, 371, 372, 1, 0, 0, 0, 372, 65, 1, 0, 0, 0, 373, 371, 1, 0, 0, 0, 374, 377, 3, 68, 34, 0, 375,
	377, 3, 102, 51, 0, 376, 374, 1, 0, 0, 0, 376, 375, 1, 0, 0, 0, 377, 383, 1, 0, 0, 0, 378, 379, 5,
	12, 0, 0, 379, 380, 3, 66, 33, 0, 380, 381, 5, 13, 0, 0, 381, 383, 1, 0, 0, 0, 382, 376, 1, 0, 0,
	0, 382, 378, 1, 0, 0, 0, 383, 67, 1, 0, 0, 0, 384, 385, 6, 34, -1, 0, 385, 400, 3, 58, 29, 0, 386,
	400, 3, 70, 35, 0, 387, 388, 5, 27, 0, 0, 388, 400, 3, 68, 34, 19, 389, 390, 5, 28, 0, 0, 390, 400,
	3, 68, 34, 18, 391, 392, 5, 29, 0, 0, 392, 400, 3, 68, 34, 17, 393, 400, 3, 82, 41, 0, 394, 395,
	5, 12, 0, 0, 395, 396, 3, 68, 34, 0, 396, 397, 5, 13, 0, 0, 397, 400, 1, 0, 0, 0, 398, 400, 3, 44,
	22, 0, 399, 384, 1, 0, 0, 0, 399, 386, 1, 0, 0, 0, 399, 387, 1, 0, 0, 0, 399, 389, 1, 0, 0, 0, 399,
	391, 1, 0, 0, 0, 399, 393, 1, 0, 0, 0, 399, 394, 1, 0, 0, 0, 399, 398, 1, 0, 0, 0, 400, 445, 1, 0,
	0, 0, 401, 402, 10, 16, 0, 0, 402, 403, 7, 0, 0, 0, 403, 444, 3, 68, 34, 17, 404, 405, 10, 15, 0,
	0, 405, 406, 7, 1, 0, 0, 406, 444, 3, 68, 34, 16, 407, 408, 10, 14, 0, 0, 408, 409, 5, 36, 0, 0,
	409, 444, 3, 68, 34, 15, 410, 411, 10, 13, 0, 0, 411, 412, 7, 2, 0, 0, 412, 444, 3, 68, 34, 14,
	413, 414, 10, 12, 0, 0, 414, 415, 5, 50, 0, 0, 415, 444, 3, 68, 34, 13, 416, 417, 10, 11, 0, 0,
	417, 418, 5, 49, 0, 0, 418, 444, 3, 68, 34, 12, 419, 420, 10, 10, 0, 0, 420, 421, 5, 51, 0, 0, 421,
	444, 3, 68, 34, 11, 422, 423, 10, 9, 0, 0, 423, 424, 7, 3, 0, 0, 424, 444, 3, 68, 34, 10, 425, 426,
	10, 8, 0, 0, 426, 427, 7, 4, 0, 0, 427, 444, 3, 68, 34, 9, 428, 429, 10, 7, 0, 0, 429, 430, 5, 46,
	0, 0, 430, 444, 3, 68, 34, 8, 431, 432, 10, 6, 0, 0, 432, 433, 5, 48, 0, 0, 433, 444, 3, 68, 34,
	7, 434, 435, 10, 5, 0, 0, 435, 436, 5, 47, 0, 0, 436, 444, 3, 68, 34, 6, 437, 438, 10, 4, 0, 0, 438,
	439, 5, 35, 0, 0, 439, 440, 3, 68, 34, 0, 440, 441, 5, 22, 0, 0, 441, 442, 3, 68, 34, 5, 442, 444,
	1, 0, 0, 0, 443, 401, 1, 0, 0, 0, 443, 404, 1, 0, 0, 0, 443, 407, 1, 0, 0, 0, 443, 410, 1, 0, 0, 0,
	443, 413, 1, 0, 0, 0, 443, 416, 1, 0, 0, 0, 443, 419, 1, 0, 0, 0, 443, 422, 1, 0, 0, 0, 443, 425,
	1, 0, 0, 0, 443, 428, 1, 0, 0, 0, 443, 431, 1, 0, 0, 0, 443, 434, 1, 0, 0, 0, 443, 437, 1, 0, 0, 0,
	444, 447, 1, 0, 0, 0, 445, 443, 1, 0, 0, 0, 445, 446, 1, 0, 0, 0, 446, 69, 1, 0, 0, 0, 447, 445, 1,
	0, 0, 0, 448, 449, 6, 35, -1, 0, 449, 451, 3, 72, 36, 0, 450, 452, 3, 78, 39, 0, 451, 450, 1, 0,
	0, 0, 451, 452, 1, 0, 0, 0, 452, 457, 1, 0, 0, 0, 453, 454, 10, 1, 0, 0, 454, 456, 3, 78, 39, 0, 455,
	453, 1, 0, 0, 0, 456, 459, 1, 0, 0, 0, 457, 455, 1, 0, 0, 0, 457, 458, 1, 0, 0, 0, 458, 71, 1, 0, 0,
	0, 459, 457, 1, 0, 0, 0, 460, 469, 3, 58, 29, 0, 461, 464, 5, 12, 0, 0, 462, 465, 3, 102, 51, 0,
	463, 465, 3, 72, 36, 0, 464, 462, 1, 0, 0, 0, 464, 463, 1, 0, 0, 0, 465, 466, 1, 0, 0, 0, 466, 467,
	5, 13, 0, 0, 467, 469, 1, 0, 0, 0, 468, 460, 1, 0, 0, 0, 468, 461, 1, 0, 0, 0, 469, 73, 1, 0, 0, 0,
	470, 471, 7, 5, 0, 0, 471, 476, 3, 58, 29, 0, 472, 473, 3, 58, 29, 0, 473, 474, 7, 5, 0, 0, 474,
	476, 1, 0, 0, 0, 475, 470, 1, 0, 0, 0, 475, 472, 1, 0, 0, 0, 476, 75, 1, 0, 0, 0, 477, 478, 7, 6, 0,
	0, 478, 77, 1, 0, 0, 0, 479, 491, 5, 12, 0, 0, 480, 485, 3, 66, 33, 0, 481, 482, 5, 20, 0, 0, 482,
	484, 3, 66, 33, 0, 483, 481, 1, 0, 0, 0, 484, 487, 1, 0, 0, 0, 485, 483, 1, 0, 0, 0, 485, 486, 1,
	0, 0, 0, 486, 489, 1, 0, 0, 0, 487, 485, 1, 0, 0, 0, 488, 490, 5, 20, 0, 0, 489, 488, 1, 0, 0, 0, 489,
	490, 1, 0, 0, 0, 490, 492, 1, 0, 0, 0, 491, 480, 1, 0, 0, 0, 491, 492, 1, 0, 0, 0, 492, 493, 1, 0,
	0, 0, 493, 494, 5, 13, 0, 0, 494, 79, 1, 0, 0, 0, 495, 496, 7, 7, 0, 0, 496, 81, 1, 0, 0, 0, 497, 510,
	5, 70, 0, 0, 498, 510, 5, 71, 0, 0, 499, 510, 5, 65, 0, 0, 500, 510, 5, 108, 0, 0, 501, 510, 5, 110,
	0, 0, 502, 510, 3, 84, 42, 0, 503, 510, 5, 69, 0, 0, 504, 510, 5, 68, 0, 0, 505, 510, 5, 67, 0, 0,
	506, 510, 5, 66, 0, 0, 507, 510, 3, 88, 44, 0, 508, 510, 3, 92, 46, 0, 509, 497, 1, 0, 0, 0, 509,
	498, 1, 0, 0, 0, 509, 499, 1, 0, 0, 0, 509, 500, 1, 0, 0, 0, 509, 501, 1, 0, 0, 0, 509, 502, 1, 0,
	0, 0, 509, 503, 1, 0, 0, 0, 509, 504, 1, 0, 0, 0, 509, 505, 1, 0, 0, 0, 509, 506, 1, 0, 0, 0, 509,
	507, 1, 0, 0, 0, 509, 508, 1, 0, 0, 0, 510, 83, 1, 0, 0, 0, 511, 515, 5, 109, 0, 0, 512, 514, 3, 86,
	43, 0, 513, 512, 1, 0, 0, 0, 514, 517, 1, 0, 0, 0, 515, 513, 1, 0, 0, 0, 515, 516, 1, 0, 0, 0, 516,
	518, 1, 0, 0, 0, 517, 515, 1, 0, 0, 0, 518, 519, 5, 116, 0, 0, 519, 85, 1, 0, 0, 0, 520, 526, 5, 118,
	0, 0, 521, 522, 5, 117, 0, 0, 522, 523, 3, 68, 34, 0, 523, 524, 5, 15, 0, 0, 524, 526, 1, 0, 0, 0,
	525, 520, 1, 0, 0, 0, 525, 521, 1, 0, 0, 0, 526, 87, 1, 0, 0, 0, 527, 528, 5, 5, 0, 0, 528, 529, 3,
	90, 45, 0, 529, 530, 5, 11, 0, 0, 530, 89, 1, 0, 0, 0, 531, 533, 5, 20, 0, 0, 532, 531, 1, 0, 0, 0,
	533, 536, 1, 0, 0, 0, 534, 532, 1, 0, 0, 0, 534, 535, 1, 0, 0, 0, 535, 538, 1, 0, 0, 0, 536, 534,
	1, 0, 0, 0, 537, 539, 3, 66, 33, 0, 538, 537, 1, 0, 0, 0, 538, 539, 1, 0, 0, 0, 539, 548, 1, 0, 0,
	0, 540, 542, 5, 20, 0, 0, 541, 540, 1, 0, 0, 0, 542, 543, 1, 0, 0, 0, 543, 541, 1, 0, 0, 0, 543, 544,
	1, 0, 0, 0, 544, 545, 1, 0, 0, 0, 545, 547, 3, 66, 33, 0, 546, 541, 1, 0, 0, 0, 547, 550, 1, 0, 0,
	0, 548, 546, 1, 0, 0, 0, 548, 549, 1, 0, 0, 0, 549, 552, 1, 0, 0, 0, 550, 548, 1, 0, 0, 0, 551, 553,
	5, 20, 0, 0, 552, 551, 1, 0, 0, 0, 552, 553, 1, 0, 0, 0, 553, 91, 1, 0, 0, 0, 554, 566, 3, 128, 64,
	0, 555, 560, 3, 94, 47, 0, 556, 557, 5, 20, 0, 0, 557, 559, 3, 94, 47, 0, 558, 556, 1, 0, 0, 0, 559,
	562, 1, 0, 0, 0, 560, 558, 1, 0, 0, 0, 560, 561, 1, 0, 0, 0, 561, 564, 1, 0, 0, 0, 562, 560, 1, 0,
	0, 0, 563, 565, 5, 20, 0, 0, 564, 563, 1, 0, 0, 0, 564, 565, 1, 0, 0, 0, 565, 567, 1, 0, 0, 0, 566,
	555, 1, 0, 0, 0, 566, 567, 1, 0, 0, 0, 567, 568, 1, 0, 0, 0, 568, 569, 3, 130, 65, 0, 569, 93, 1,
	0, 0, 0, 570, 571, 3, 96, 48, 0, 571, 572, 5, 22, 0, 0, 572, 573, 3, 66, 33, 0, 573, 95, 1, 0, 0,
	0, 574, 578, 5, 107, 0, 0, 575, 578, 3, 124, 62, 0, 576, 578, 3, 126, 63, 0, 577, 574, 1, 0, 0,
	0, 577, 575, 1, 0, 0, 0, 577, 576, 1, 0, 0, 0, 578, 97, 1, 0, 0, 0, 579, 580, 5, 22, 0, 0, 580, 582,
	3, 108, 54, 0, 581, 583, 3, 78, 39, 0, 582, 581, 1, 0, 0, 0, 582, 583, 1, 0, 0, 0, 583, 99, 1, 0,
	0, 0, 584, 585, 5, 89, 0, 0, 585, 596, 3, 108, 54, 0, 586, 588, 3, 104, 52, 0, 587, 586, 1, 0, 0,
	0, 587, 588, 1, 0, 0, 0, 588, 589, 1, 0, 0, 0, 589, 590, 5, 97, 0, 0, 590, 597, 3, 6, 3, 0, 591, 593,
	5, 97, 0, 0, 592, 594, 3, 104, 52, 0, 593, 592, 1, 0, 0, 0, 593, 594, 1, 0, 0, 0, 594, 595, 1, 0,
	0, 0, 595, 597, 3, 6, 3, 0, 596, 587, 1, 0, 0, 0, 596, 591, 1, 0, 0, 0, 597, 101, 1, 0, 0, 0, 598,
	600, 5, 89, 0, 0, 599, 601, 5, 107, 0, 0, 600, 599, 1, 0, 0, 0, 600, 601, 1, 0, 0, 0, 601, 602, 1,
	0, 0, 0, 602, 603, 3, 104, 52, 0, 603, 604, 3, 6, 3, 0, 604, 103, 1, 0, 0, 0, 605, 617, 5, 12, 0,
	0, 606, 611, 3, 106, 53, 0, 607, 608, 5, 20, 0, 0, 608, 610, 3, 106, 53, 0, 609, 607, 1, 0, 0, 0,
	610, 613, 1, 0, 0, 0, 611, 609, 1, 0, 0, 0, 611, 612, 1, 0, 0, 0, 612, 615, 1, 0, 0, 0, 613, 611,
	1, 0, 0, 0, 614, 616, 5, 20, 0, 0, 615, 614, 1, 0, 0, 0, 615, 616, 1, 0, 0, 0, 616, 618, 1, 0, 0, 0,
	617, 606, 1, 0, 0, 0, 617, 618, 1, 0, 0, 0, 618, 619, 1, 0, 0, 0, 619, 620, 5, 13, 0, 0, 620, 105,
	1, 0, 0, 0, 621, 624, 3, 108, 54, 0, 622, 623, 5, 21, 0, 0, 623, 625, 3, 66, 33, 0, 624, 622, 1,
	0, 0, 0, 624, 625, 1, 0, 0, 0, 625, 107, 1, 0, 0, 0, 626, 629, 5, 107, 0, 0, 627, 629, 3, 124, 62,
	0, 628, 626, 1, 0, 0, 0, 628, 627, 1, 0, 0, 0, 629, 109, 1, 0, 0, 0, 630, 631, 5, 96, 0, 0, 631, 632,
	3, 108, 54, 0, 632, 634, 3, 128, 64, 0, 633, 635, 3, 112, 56, 0, 634, 633, 1, 0, 0, 0, 634, 635,
	1, 0, 0, 0, 635, 636, 1, 0, 0, 0, 636, 637, 3, 130, 65, 0, 637, 111, 1, 0, 0, 0, 638, 643, 3, 114,
	57, 0, 639, 640, 5, 20, 0, 0, 640, 642, 3, 114, 57, 0, 641, 639, 1, 0, 0, 0, 642, 645, 1, 0, 0, 0,
	643, 641, 1, 0, 0, 0, 643, 644, 1, 0, 0, 0, 644, 647, 1, 0, 0, 0, 645, 643, 1, 0, 0, 0, 646, 648,
	5, 20, 0, 0, 647, 646, 1, 0, 0, 0, 647, 648, 1, 0, 0, 0, 648, 113, 1, 0, 0, 0, 649, 652, 3, 108, 54,
	0, 650, 651, 5, 21, 0, 0, 651, 653, 7, 8, 0, 0, 652, 650, 1, 0, 0, 0, 652, 653, 1, 0, 0, 0, 653, 115,
	1, 0, 0, 0, 654, 655, 5, 102, 0, 0, 655, 657, 3, 108, 54, 0, 656, 658, 3, 134, 67, 0, 657, 656,
	1, 0, 0, 0, 658, 659, 1, 0, 0, 0, 659, 657, 1, 0, 0, 0, 659, 660, 1, 0, 0, 0, 660, 661, 1, 0, 0, 0,
	661, 662, 7, 9, 0, 0, 662, 117, 1, 0, 0, 0, 663, 664, 5, 104, 0, 0, 664, 665, 5, 114, 0, 0, 665,
	666, 7, 10, 0, 0, 666, 119, 1, 0, 0, 0, 667, 669, 7, 11, 0, 0, 668, 670, 5, 114, 0, 0, 669, 668,
	1, 0, 0, 0, 669, 670, 1, 0, 0, 0, 670, 671, 1, 0, 0, 0, 671, 672, 7, 10, 0, 0, 672, 121, 1, 0, 0, 0,
	673, 674, 3, 108, 54, 0, 674, 123, 1, 0, 0, 0, 675, 676, 7, 12, 0, 0, 676, 125, 1, 0, 0, 0, 677,
	678, 5, 71, 0, 0, 678, 127, 1, 0, 0, 0, 679, 680, 7, 13, 0, 0, 680, 129, 1, 0, 0, 0, 681, 682, 7,
	14, 0, 0, 682, 131, 1, 0, 0, 0, 683, 684, 5, 19, 0, 0, 684, 133, 1, 0, 0, 0, 685, 686, 7, 15, 0, 0,
	686, 135, 1, 0, 0, 0, 73, 137, 144, 169, 172, 176, 185, 200, 204, 208, 216, 236, 240, 242, 249,
	255, 260, 269, 272, 277, 280, 289, 304, 310, 313, 318, 326, 337, 343, 347, 356, 364, 371,
	376, 382, 399, 443, 445, 451, 457, 464, 468, 475, 485, 489, 491, 509, 515, 525, 534, 538,
	543, 548, 552, 560, 564, 566, 577, 582, 587, 593, 596, 600, 611, 615, 617, 624, 628, 634,
	643, 647, 652, 659, 669];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map((ds, index) => new antlr4.dfa.DFA(ds, index));

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class GameMakerLanguageParser extends antlr4.Parser {

	static grammarFileName = "GameMakerLanguageParser.g4";
	static literalNames = [null, null, null, null, null, "'['", "'[|'",
		"'[?'", "'[#'", "'[@'", "'[$'", "']'", "'('",
		"')'", null, null, "'}'", "'begin'", "'end'",
		"';'", "','", null, "':'", "'.'", "'++'", "'--'",
		"'+'", "'-'", "'~'", null, "'*'", "'/'", "'div'",
		null, "'**'", "'?'", "'??'", "'??='", "'>>'",
		"'<<'", "'<'", "'>'", "'<='", "'>='", "'=='",
		null, "'&'", "'^'", "'|'", null, null, null,
		"'*='", "'/='", "'+='", "'-='", "'%='", "'<<='",
		"'>>='", "'&='", "'^='", "'|='", "'#'", "'$'",
		"'@'", null, null, null, null, null, "'undefined'",
		"'noone'", "'break'", "'exit'", "'do'", "'case'",
		"'else'", "'new'", "'var'", "'globalvar'", "'catch'",
		"'finally'", "'return'", "'continue'", "'for'",
		"'switch'", "'while'", "'until'", "'repeat'",
		"'function'", "'with'", "'default'", "'if'",
		"'throw'", "'delete'", "'try'", "'enum'", "'constructor'",
		"'static'", "'self'", "'other'", "'all'", "'#macro'",
		"'\\'", "'#define'", "'#region'", "'#endregion'"];
	static symbolicNames = [null, "MultiLineComment", "SingleLineComment",
		"InlineComment", "LineContinuation", "OpenBracket",
		"ListAccessor", "MapAccessor", "GridAccessor",
		"ArrayAccessor", "StructAccessor", "CloseBracket",
		"OpenParen", "CloseParen", "OpenBrace", "TemplateStringEndExpression",
		"CloseBrace", "Begin", "End", "SemiColon",
		"Comma", "Assign", "Colon", "Dot", "PlusPlus",
		"MinusMinus", "Plus", "Minus", "BitNot", "Not",
		"Multiply", "Divide", "IntegerDivide", "Modulo",
		"Power", "QuestionMark", "NullCoalesce", "NullCoalescingAssign",
		"RightShiftArithmetic", "LeftShiftArithmetic",
		"LessThan", "MoreThan", "LessThanEquals", "GreaterThanEquals",
		"Equals_", "NotEquals", "BitAnd", "BitXOr",
		"BitOr", "And", "Or", "Xor", "MultiplyAssign",
		"DivideAssign", "PlusAssign", "MinusAssign",
		"ModulusAssign", "LeftShiftArithmeticAssign",
		"RightShiftArithmeticAssign", "BitAndAssign",
		"BitXorAssign", "BitOrAssign", "NumberSign",
		"DollarSign", "AtSign", "BooleanLiteral", "IntegerLiteral",
		"DecimalLiteral", "BinaryLiteral", "HexIntegerLiteral",
		"Undefined", "NoOne", "Break", "Exit", "Do",
		"Case", "Else", "New", "Var", "GlobalVar",
		"Catch", "Finally", "Return", "Continue", "For",
		"Switch", "While", "Until", "Repeat", "Function",
		"With", "Default", "If", "Throw", "Delete",
		"Try", "Enum", "Constructor", "Static", "Self",
		"Other", "All", "Macro", "EscapedNewLine",
		"Define", "Region", "EndRegion", "Identifier",
		"StringLiteral", "TemplateStringStart", "VerbatimStringLiteral",
		"WhiteSpaces", "LineTerminator", "UnexpectedCharacter",
		"RegionCharacters", "RegionEOL", "TemplateStringEnd",
		"TemplateStringStartExpression", "TemplateStringText"];
	static ruleNames = ["program", "statementList", "statement", "block",
		"ifStatement", "iterationStatement", "withStatement",
		"switchStatement", "continueStatement", "breakStatement",
		"exitStatement", "emptyStatement", "caseBlock",
		"caseClauses", "caseClause", "defaultClause", "throwStatement",
		"tryStatement", "catchProduction", "finallyProduction",
		"returnStatement", "deleteStatement", "assignmentExpression",
		"variableDeclarationList", "varModifier", "variableDeclaration",
		"globalVarStatement", "newExpression", "lValueStartExpression",
		"lValueExpression", "lValueChainOperator", "lValueFinalOperator",
		"expressionSequence", "expressionOrFunction", "expression",
		"callStatement", "callableExpression", "incDecStatement",
		"accessor", "arguments", "assignmentOperator",
		"literal", "templateStringLiteral", "templateStringAtom",
		"arrayLiteral", "elementList", "structLiteral",
		"propertyAssignment", "propertyIdentifier", "inheritanceClause",
		"structDeclaration", "functionDeclaration", "parameterList",
		"parameterArgument", "identifier", "enumeratorDeclaration",
		"enumeratorList", "enumerator", "macroStatement",
		"defineStatement", "regionStatement", "identifierStatement",
		"softKeyword", "propertySoftKeyword", "openBlock",
		"closeBlock", "eos", "macroToken"];

	constructor(input) {
		super(input);
		this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
		this.ruleNames = GameMakerLanguageParser.ruleNames;
		this.literalNames = GameMakerLanguageParser.literalNames;
		this.symbolicNames = GameMakerLanguageParser.symbolicNames;
	}

	sempred(localctx, ruleIndex, predIndex) {
		switch (ruleIndex) {
			case 34:
				return this.expression_sempred(localctx, predIndex);
			case 35:
				return this.callStatement_sempred(localctx, predIndex);
			default:
				throw "No predicate with index:" + ruleIndex;
		}
	}

	expression_sempred(localctx, predIndex) {
		switch (predIndex) {
			case 0:
				return this.precpred(this._ctx, 16);
			case 1:
				return this.precpred(this._ctx, 15);
			case 2:
				return this.precpred(this._ctx, 14);
			case 3:
				return this.precpred(this._ctx, 13);
			case 4:
				return this.precpred(this._ctx, 12);
			case 5:
				return this.precpred(this._ctx, 11);
			case 6:
				return this.precpred(this._ctx, 10);
			case 7:
				return this.precpred(this._ctx, 9);
			case 8:
				return this.precpred(this._ctx, 8);
			case 9:
				return this.precpred(this._ctx, 7);
			case 10:
				return this.precpred(this._ctx, 6);
			case 11:
				return this.precpred(this._ctx, 5);
			case 12:
				return this.precpred(this._ctx, 4);
			default:
				throw "No predicate with index:" + predIndex;
		}
	};

	callStatement_sempred(localctx, predIndex) {
		switch (predIndex) {
			case 13:
				return this.precpred(this._ctx, 1);
			default:
				throw "No predicate with index:" + predIndex;
		}
	};




	program() {
		let localctx = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, GameMakerLanguageParser.RULE_program);
		var _la = 0;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 137;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1f) === 0 && ((1 << _la) & 51007488) !== 0) || ((((_la - 72)) & ~0x1f) === 0 && ((1 << (_la - 72)) & 2142731495) !== 0) || ((((_la - 104)) & ~0x1f) === 0 && ((1 << (_la - 104)) & 15) !== 0)) {
				this.state = 136;
				this.statementList();
			}

			this.state = 139;
			this.match(GameMakerLanguageParser.EOF);
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	statementList() {
		let localctx = new StatementListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, GameMakerLanguageParser.RULE_statementList);
		var _la = 0;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				this.state = 141;
				this.statement();
				this.state = 144;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1f) === 0 && ((1 << _la) & 51007488) !== 0) || ((((_la - 72)) & ~0x1f) === 0 && ((1 << (_la - 72)) & 2142731495) !== 0) || ((((_la - 104)) & ~0x1f) === 0 && ((1 << (_la - 104)) & 15) !== 0));
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	statement() {
		let localctx = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, GameMakerLanguageParser.RULE_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 169;
			this._errHandler.sync(this);
			var la_ = this._interp.adaptivePredict(this._input, 2, this._ctx);
			switch (la_) {
				case 1:
					this.state = 146;
					this.block();
					break;

				case 2:
					this.state = 147;
					this.emptyStatement();
					break;

				case 3:
					this.state = 148;
					this.ifStatement();
					break;

				case 4:
					this.state = 149;
					this.variableDeclarationList();
					break;

				case 5:
					this.state = 150;
					this.iterationStatement();
					break;

				case 6:
					this.state = 151;
					this.continueStatement();
					break;

				case 7:
					this.state = 152;
					this.breakStatement();
					break;

				case 8:
					this.state = 153;
					this.returnStatement();
					break;

				case 9:
					this.state = 154;
					this.withStatement();
					break;

				case 10:
					this.state = 155;
					this.switchStatement();
					break;

				case 11:
					this.state = 156;
					this.tryStatement();
					break;

				case 12:
					this.state = 157;
					this.structDeclaration();
					break;

				case 13:
					this.state = 158;
					this.throwStatement();
					break;

				case 14:
					this.state = 159;
					this.exitStatement();
					break;

				case 15:
					this.state = 160;
					this.macroStatement();
					break;

				case 16:
					this.state = 161;
					this.defineStatement();
					break;

				case 17:
					this.state = 162;
					this.regionStatement();
					break;

				case 18:
					this.state = 163;
					this.enumeratorDeclaration();
					break;

				case 19:
					this.state = 164;
					this.globalVarStatement();
					break;

				case 20:
					this.state = 165;
					this.assignmentExpression();
					break;

				case 21:
					this.state = 166;
					this.incDecStatement();
					break;

				case 22:
					this.state = 167;
					this.callStatement(0);
					break;

				case 23:
					this.state = 168;
					this.functionDeclaration();
					break;

			}
			this.state = 172;
			this._errHandler.sync(this);
			var la_ = this._interp.adaptivePredict(this._input, 3, this._ctx);
			if (la_ === 1) {
				this.state = 171;
				this.eos();

			}
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	block() {
		let localctx = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, GameMakerLanguageParser.RULE_block);
		var _la = 0;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 174;
			this.openBlock();
			this.state = 176;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1f) === 0 && ((1 << _la) & 51007488) !== 0) || ((((_la - 72)) & ~0x1f) === 0 && ((1 << (_la - 72)) & 2142731495) !== 0) || ((((_la - 104)) & ~0x1f) === 0 && ((1 << (_la - 104)) & 15) !== 0)) {
				this.state = 175;
				this.statementList();
			}

			this.state = 178;
			this.closeBlock();
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	ifStatement() {
		let localctx = new IfStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, GameMakerLanguageParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 180;
			this.match(GameMakerLanguageParser.If);
			this.state = 181;
			this.expression(0);
			this.state = 182;
			this.statement();
			this.state = 185;
			this._errHandler.sync(this);
			var la_ = this._interp.adaptivePredict(this._input, 5, this._ctx);
			if (la_ === 1) {
				this.state = 183;
				this.match(GameMakerLanguageParser.Else);
				this.state = 184;
				this.statement();

			}
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	iterationStatement() {
		let localctx = new IterationStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, GameMakerLanguageParser.RULE_iterationStatement);
		var _la = 0;
		try {
			this.state = 216;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case 74:
					localctx = new DoStatementContext(this, localctx);
					this.enterOuterAlt(localctx, 1);
					this.state = 187;
					this.match(GameMakerLanguageParser.Do);
					this.state = 188;
					this.statement();
					this.state = 189;
					this.match(GameMakerLanguageParser.Until);
					this.state = 190;
					this.expression(0);
					break;
				case 86:
					localctx = new WhileStatementContext(this, localctx);
					this.enterOuterAlt(localctx, 2);
					this.state = 192;
					this.match(GameMakerLanguageParser.While);
					this.state = 193;
					this.expression(0);
					this.state = 194;
					this.statement();
					break;
				case 84:
					localctx = new ForStatementContext(this, localctx);
					this.enterOuterAlt(localctx, 3);
					this.state = 196;
					this.match(GameMakerLanguageParser.For);
					this.state = 197;
					this.match(GameMakerLanguageParser.OpenParen);
					this.state = 200;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
						case 78:
						case 98:
							this.state = 198;
							this.variableDeclarationList();
							break;
						case 77:
						case 97:
						case 99:
						case 100:
						case 101:
						case 107:
							this.state = 199;
							this.assignmentExpression();
							break;
						case 19:
							break;
						default:
							break;
					}
					this.state = 202;
					this.match(GameMakerLanguageParser.SemiColon);
					this.state = 204;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1f) === 0 && ((1 << _la) & 939675680) !== 0) || ((((_la - 65)) & ~0x1f) === 0 && ((1 << (_la - 65)) & 4223) !== 0) || ((((_la - 97)) & ~0x1f) === 0 && ((1 << (_la - 97)) & 15389) !== 0)) {
						this.state = 203;
						this.expression(0);
					}

					this.state = 206;
					this.match(GameMakerLanguageParser.SemiColon);
					this.state = 208;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1f) === 0 && ((1 << _la) & 51007488) !== 0) || ((((_la - 72)) & ~0x1f) === 0 && ((1 << (_la - 72)) & 2142731495) !== 0) || ((((_la - 104)) & ~0x1f) === 0 && ((1 << (_la - 104)) & 15) !== 0)) {
						this.state = 207;
						this.statement();
					}

					this.state = 210;
					this.match(GameMakerLanguageParser.CloseParen);
					this.state = 211;
					this.statement();
					break;
				case 88:
					localctx = new RepeatStatementContext(this, localctx);
					this.enterOuterAlt(localctx, 4);
					this.state = 212;
					this.match(GameMakerLanguageParser.Repeat);
					this.state = 213;
					this.expression(0);
					this.state = 214;
					this.statement();
					break;
				default:
					throw new antlr4.error.NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	withStatement() {
		let localctx = new WithStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, GameMakerLanguageParser.RULE_withStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 218;
			this.match(GameMakerLanguageParser.With);
			this.state = 219;
			this.expression(0);
			this.state = 220;
			this.statement();
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	switchStatement() {
		let localctx = new SwitchStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, GameMakerLanguageParser.RULE_switchStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 222;
			this.match(GameMakerLanguageParser.Switch);
			this.state = 223;
			this.expression(0);
			this.state = 224;
			this.caseBlock();
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	continueStatement() {
		let localctx = new ContinueStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, GameMakerLanguageParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 226;
			this.match(GameMakerLanguageParser.Continue);
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	breakStatement() {
		let localctx = new BreakStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, GameMakerLanguageParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 228;
			this.match(GameMakerLanguageParser.Break);
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	exitStatement() {
		let localctx = new ExitStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, GameMakerLanguageParser.RULE_exitStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 230;
			this.match(GameMakerLanguageParser.Exit);
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	emptyStatement() {
		let localctx = new EmptyStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, GameMakerLanguageParser.RULE_emptyStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 232;
			this.match(GameMakerLanguageParser.SemiColon);
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	caseBlock() {
		let localctx = new CaseBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, GameMakerLanguageParser.RULE_caseBlock);
		var _la = 0;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 234;
			this.openBlock();
			this.state = 236;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === 75) {
				this.state = 235;
				this.caseClauses();
			}

			this.state = 242;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === 91) {
				this.state = 238;
				this.defaultClause();
				this.state = 240;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === 75) {
					this.state = 239;
					this.caseClauses();
				}

			}

			this.state = 244;
			this.closeBlock();
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	caseClauses() {
		let localctx = new CaseClausesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, GameMakerLanguageParser.RULE_caseClauses);
		var _la = 0;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 247;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				this.state = 246;
				this.caseClause();
				this.state = 249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === 75);
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	caseClause() {
		let localctx = new CaseClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, GameMakerLanguageParser.RULE_caseClause);
		var _la = 0;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 251;
			this.match(GameMakerLanguageParser.Case);
			this.state = 252;
			this.expression(0);
			this.state = 253;
			this.match(GameMakerLanguageParser.Colon);
			this.state = 255;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1f) === 0 && ((1 << _la) & 51007488) !== 0) || ((((_la - 72)) & ~0x1f) === 0 && ((1 << (_la - 72)) & 2142731495) !== 0) || ((((_la - 104)) & ~0x1f) === 0 && ((1 << (_la - 104)) & 15) !== 0)) {
				this.state = 254;
				this.statementList();
			}

		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	defaultClause() {
		let localctx = new DefaultClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, GameMakerLanguageParser.RULE_defaultClause);
		var _la = 0;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 257;
			this.match(GameMakerLanguageParser.Default);
			this.state = 258;
			this.match(GameMakerLanguageParser.Colon);
			this.state = 260;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1f) === 0 && ((1 << _la) & 51007488) !== 0) || ((((_la - 72)) & ~0x1f) === 0 && ((1 << (_la - 72)) & 2142731495) !== 0) || ((((_la - 104)) & ~0x1f) === 0 && ((1 << (_la - 104)) & 15) !== 0)) {
				this.state = 259;
				this.statementList();
			}

		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	throwStatement() {
		let localctx = new ThrowStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, GameMakerLanguageParser.RULE_throwStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 262;
			this.match(GameMakerLanguageParser.Throw);
			this.state = 263;
			this.expression(0);
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	tryStatement() {
		let localctx = new TryStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, GameMakerLanguageParser.RULE_tryStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 265;
			this.match(GameMakerLanguageParser.Try);
			this.state = 266;
			this.statement();
			this.state = 272;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case 80:
					this.state = 267;
					this.catchProduction();
					this.state = 269;
					this._errHandler.sync(this);
					var la_ = this._interp.adaptivePredict(this._input, 16, this._ctx);
					if (la_ === 1) {
						this.state = 268;
						this.finallyProduction();

					}
					break;
				case 81:
					this.state = 271;
					this.finallyProduction();
					break;
				default:
					throw new antlr4.error.NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	catchProduction() {
		let localctx = new CatchProductionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, GameMakerLanguageParser.RULE_catchProduction);
		var _la = 0;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 274;
			this.match(GameMakerLanguageParser.Catch);
			this.state = 280;
			this._errHandler.sync(this);
			var la_ = this._interp.adaptivePredict(this._input, 19, this._ctx);
			if (la_ === 1) {
				this.state = 275;
				this.match(GameMakerLanguageParser.OpenParen);
				this.state = 277;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 97)) & ~0x1f) === 0 && ((1 << (_la - 97)) & 1053) !== 0)) {
					this.state = 276;
					this.identifier();
				}

				this.state = 279;
				this.match(GameMakerLanguageParser.CloseParen);

			}
			this.state = 282;
			this.statement();
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	finallyProduction() {
		let localctx = new FinallyProductionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, GameMakerLanguageParser.RULE_finallyProduction);
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 284;
			this.match(GameMakerLanguageParser.Finally);
			this.state = 285;
			this.statement();
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	returnStatement() {
		let localctx = new ReturnStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, GameMakerLanguageParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 287;
			this.match(GameMakerLanguageParser.Return);
			this.state = 289;
			this._errHandler.sync(this);
			var la_ = this._interp.adaptivePredict(this._input, 20, this._ctx);
			if (la_ === 1) {
				this.state = 288;
				this.expression(0);

			}
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	deleteStatement() {
		let localctx = new DeleteStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, GameMakerLanguageParser.RULE_deleteStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 291;
			this.match(GameMakerLanguageParser.Delete);
			this.state = 292;
			this.expression(0);
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	assignmentExpression() {
		let localctx = new AssignmentExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, GameMakerLanguageParser.RULE_assignmentExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 294;
			this.lValueExpression();
			this.state = 295;
			this.assignmentOperator();
			this.state = 296;
			this.expressionOrFunction();
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	variableDeclarationList() {
		let localctx = new VariableDeclarationListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, GameMakerLanguageParser.RULE_variableDeclarationList);
		var _la = 0;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 298;
			this.varModifier();
			this.state = 299;
			this.variableDeclaration();
			this.state = 304;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === 20) {
				this.state = 300;
				this.match(GameMakerLanguageParser.Comma);
				this.state = 301;
				this.variableDeclaration();
				this.state = 306;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	varModifier() {
		let localctx = new VarModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, GameMakerLanguageParser.RULE_varModifier);
		var _la = 0;
		try {
			this.state = 313;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case 78:
					this.enterOuterAlt(localctx, 1);
					this.state = 308;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						this.state = 307;
						this.match(GameMakerLanguageParser.Var);
						this.state = 310;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === 78);
					break;
				case 98:
					this.enterOuterAlt(localctx, 2);
					this.state = 312;
					this.match(GameMakerLanguageParser.Static);
					break;
				default:
					throw new antlr4.error.NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	variableDeclaration() {
		let localctx = new VariableDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, GameMakerLanguageParser.RULE_variableDeclaration);
		var _la = 0;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 315;
			this.identifier();
			this.state = 318;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === 21) {
				this.state = 316;
				this.match(GameMakerLanguageParser.Assign);
				this.state = 317;
				this.expressionOrFunction();
			}

		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	globalVarStatement() {
		let localctx = new GlobalVarStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, GameMakerLanguageParser.RULE_globalVarStatement);
		var _la = 0;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 320;
			this.match(GameMakerLanguageParser.GlobalVar);
			this.state = 321;
			this.identifier();
			this.state = 326;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === 20) {
				this.state = 322;
				this.match(GameMakerLanguageParser.Comma);
				this.state = 323;
				this.identifier();
				this.state = 328;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 329;
			this.match(GameMakerLanguageParser.SemiColon);
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	newExpression() {
		let localctx = new NewExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, GameMakerLanguageParser.RULE_newExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 331;
			this.match(GameMakerLanguageParser.New);
			this.state = 332;
			this.identifier();
			this.state = 333;
			this.arguments();
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	lValueStartExpression() {
		let localctx = new LValueStartExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, GameMakerLanguageParser.RULE_lValueStartExpression);
		try {
			this.state = 337;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case 97:
				case 99:
				case 100:
				case 101:
				case 107:
					localctx = new IdentifierLValueContext(this, localctx);
					this.enterOuterAlt(localctx, 1);
					this.state = 335;
					this.identifier();
					break;
				case 77:
					localctx = new NewLValueContext(this, localctx);
					this.enterOuterAlt(localctx, 2);
					this.state = 336;
					this.newExpression();
					break;
				default:
					throw new antlr4.error.NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	lValueExpression() {
		let localctx = new LValueExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, GameMakerLanguageParser.RULE_lValueExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 339;
			this.lValueStartExpression();
			this.state = 347;
			this._errHandler.sync(this);
			var la_ = this._interp.adaptivePredict(this._input, 28, this._ctx);
			if (la_ === 1) {
				this.state = 343;
				this._errHandler.sync(this);
				var _alt = this._interp.adaptivePredict(this._input, 27, this._ctx)
				while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						this.state = 340;
						this.lValueChainOperator();
					}
					this.state = 345;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 27, this._ctx);
				}

				this.state = 346;
				this.lValueFinalOperator();

			}
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	lValueChainOperator() {
		let localctx = new LValueChainOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, GameMakerLanguageParser.RULE_lValueChainOperator);
		try {
			this.state = 356;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case 5:
				case 6:
				case 7:
				case 8:
				case 9:
				case 10:
					localctx = new MemberIndexLValueContext(this, localctx);
					this.enterOuterAlt(localctx, 1);
					this.state = 349;
					this.accessor();
					this.state = 350;
					this.expressionSequence();
					this.state = 351;
					this.match(GameMakerLanguageParser.CloseBracket);
					break;
				case 23:
					localctx = new MemberDotLValueContext(this, localctx);
					this.enterOuterAlt(localctx, 2);
					this.state = 353;
					this.match(GameMakerLanguageParser.Dot);
					this.state = 354;
					this.identifier();
					break;
				case 12:
					localctx = new CallLValueContext(this, localctx);
					this.enterOuterAlt(localctx, 3);
					this.state = 355;
					this.arguments();
					break;
				default:
					throw new antlr4.error.NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	lValueFinalOperator() {
		let localctx = new LValueFinalOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, GameMakerLanguageParser.RULE_lValueFinalOperator);
		try {
			this.state = 364;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case 5:
				case 6:
				case 7:
				case 8:
				case 9:
				case 10:
					localctx = new MemberIndexLValueFinalContext(this, localctx);
					this.enterOuterAlt(localctx, 1);
					this.state = 358;
					this.accessor();
					this.state = 359;
					this.expressionSequence();
					this.state = 360;
					this.match(GameMakerLanguageParser.CloseBracket);
					break;
				case 23:
					localctx = new MemberDotLValueFinalContext(this, localctx);
					this.enterOuterAlt(localctx, 2);
					this.state = 362;
					this.match(GameMakerLanguageParser.Dot);
					this.state = 363;
					this.identifier();
					break;
				default:
					throw new antlr4.error.NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	expressionSequence() {
		let localctx = new ExpressionSequenceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, GameMakerLanguageParser.RULE_expressionSequence);
		var _la = 0;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 366;
			this.expression(0);
			this.state = 371;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === 20) {
				this.state = 367;
				this.match(GameMakerLanguageParser.Comma);
				this.state = 368;
				this.expression(0);
				this.state = 373;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	expressionOrFunction() {
		let localctx = new ExpressionOrFunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, GameMakerLanguageParser.RULE_expressionOrFunction);
		try {
			this.state = 382;
			this._errHandler.sync(this);
			var la_ = this._interp.adaptivePredict(this._input, 33, this._ctx);
			switch (la_) {
				case 1:
					this.enterOuterAlt(localctx, 1);
					this.state = 376;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
						case 5:
						case 12:
						case 14:
						case 17:
						case 27:
						case 28:
						case 29:
						case 65:
						case 66:
						case 67:
						case 68:
						case 69:
						case 70:
						case 71:
						case 77:
						case 97:
						case 99:
						case 100:
						case 101:
						case 107:
						case 108:
						case 109:
						case 110:
							this.state = 374;
							this.expression(0);
							break;
						case 89:
							this.state = 375;
							this.functionDeclaration();
							break;
						default:
							throw new antlr4.error.NoViableAltException(this);
					}
					break;

				case 2:
					this.enterOuterAlt(localctx, 2);
					this.state = 378;
					this.match(GameMakerLanguageParser.OpenParen);
					this.state = 379;
					this.expressionOrFunction();
					this.state = 380;
					this.match(GameMakerLanguageParser.CloseParen);
					break;

			}
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}


	expression(_p) {
		if (_p === undefined) {
			_p = 0;
		}
		const _parentctx = this._ctx;
		const _parentState = this.state;
		let localctx = new ExpressionContext(this, this._ctx, _parentState);
		let _prevctx = localctx;
		const _startState = 68;
		this.enterRecursionRule(localctx, 68, GameMakerLanguageParser.RULE_expression, _p);
		var _la = 0;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 399;
			this._errHandler.sync(this);
			var la_ = this._interp.adaptivePredict(this._input, 34, this._ctx);
			switch (la_) {
				case 1:
					localctx = new VariableExpressionContext(this, localctx);
					this._ctx = localctx;
					_prevctx = localctx;

					this.state = 385;
					this.lValueExpression();
					break;

				case 2:
					localctx = new CallExpressionContext(this, localctx);
					this._ctx = localctx;
					_prevctx = localctx;
					this.state = 386;
					this.callStatement(0);
					break;

				case 3:
					localctx = new UnaryMinusExpressionContext(this, localctx);
					this._ctx = localctx;
					_prevctx = localctx;
					this.state = 387;
					this.match(GameMakerLanguageParser.Minus);
					this.state = 388;
					this.expression(19);
					break;

				case 4:
					localctx = new BitNotExpressionContext(this, localctx);
					this._ctx = localctx;
					_prevctx = localctx;
					this.state = 389;
					this.match(GameMakerLanguageParser.BitNot);
					this.state = 390;
					this.expression(18);
					break;

				case 5:
					localctx = new NotExpressionContext(this, localctx);
					this._ctx = localctx;
					_prevctx = localctx;
					this.state = 391;
					this.match(GameMakerLanguageParser.Not);
					this.state = 392;
					this.expression(17);
					break;

				case 6:
					localctx = new LiteralExpressionContext(this, localctx);
					this._ctx = localctx;
					_prevctx = localctx;
					this.state = 393;
					this.literal();
					break;

				case 7:
					localctx = new ParenthesizedExpressionContext(this, localctx);
					this._ctx = localctx;
					_prevctx = localctx;
					this.state = 394;
					this.match(GameMakerLanguageParser.OpenParen);
					this.state = 395;
					this.expression(0);
					this.state = 396;
					this.match(GameMakerLanguageParser.CloseParen);
					break;

				case 8:
					localctx = new AssignmentExpressionLabelContext(this, localctx);
					this._ctx = localctx;
					_prevctx = localctx;
					this.state = 398;
					this.assignmentExpression();
					break;

			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 445;
			this._errHandler.sync(this);
			var _alt = this._interp.adaptivePredict(this._input, 36, this._ctx)
			while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners !== null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					this.state = 443;
					this._errHandler.sync(this);
					var la_ = this._interp.adaptivePredict(this._input, 35, this._ctx);
					switch (la_) {
						case 1:
							localctx = new MultiplicativeExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
							this.pushNewRecursionContext(localctx, _startState, GameMakerLanguageParser.RULE_expression);
							this.state = 401;
							if (!(this.precpred(this._ctx, 16))) {
								throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
							}
							this.state = 402;
							_la = this._input.LA(1);
							if (!(((((_la - 30)) & ~0x1f) === 0 && ((1 << (_la - 30)) & 15) !== 0))) {
								this._errHandler.recoverInline(this);
							}
							else {
								this._errHandler.reportMatch(this);
								this.consume();
							}
							this.state = 403;
							this.expression(17);
							break;

						case 2:
							localctx = new AdditiveExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
							this.pushNewRecursionContext(localctx, _startState, GameMakerLanguageParser.RULE_expression);
							this.state = 404;
							if (!(this.precpred(this._ctx, 15))) {
								throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
							}
							this.state = 405;
							_la = this._input.LA(1);
							if (!(_la === 26 || _la === 27)) {
								this._errHandler.recoverInline(this);
							}
							else {
								this._errHandler.reportMatch(this);
								this.consume();
							}
							this.state = 406;
							this.expression(16);
							break;

						case 3:
							localctx = new CoalesceExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
							this.pushNewRecursionContext(localctx, _startState, GameMakerLanguageParser.RULE_expression);
							this.state = 407;
							if (!(this.precpred(this._ctx, 14))) {
								throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
							}
							this.state = 408;
							this.match(GameMakerLanguageParser.NullCoalesce);
							this.state = 409;
							this.expression(15);
							break;

						case 4:
							localctx = new BitShiftExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
							this.pushNewRecursionContext(localctx, _startState, GameMakerLanguageParser.RULE_expression);
							this.state = 410;
							if (!(this.precpred(this._ctx, 13))) {
								throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
							}
							this.state = 411;
							_la = this._input.LA(1);
							if (!(_la === 38 || _la === 39)) {
								this._errHandler.recoverInline(this);
							}
							else {
								this._errHandler.reportMatch(this);
								this.consume();
							}
							this.state = 412;
							this.expression(14);
							break;

						case 5:
							localctx = new LogicalOrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
							this.pushNewRecursionContext(localctx, _startState, GameMakerLanguageParser.RULE_expression);
							this.state = 413;
							if (!(this.precpred(this._ctx, 12))) {
								throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
							}
							this.state = 414;
							this.match(GameMakerLanguageParser.Or);
							this.state = 415;
							this.expression(13);
							break;

						case 6:
							localctx = new LogicalAndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
							this.pushNewRecursionContext(localctx, _startState, GameMakerLanguageParser.RULE_expression);
							this.state = 416;
							if (!(this.precpred(this._ctx, 11))) {
								throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
							}
							this.state = 417;
							this.match(GameMakerLanguageParser.And);
							this.state = 418;
							this.expression(12);
							break;

						case 7:
							localctx = new LogicalXorExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
							this.pushNewRecursionContext(localctx, _startState, GameMakerLanguageParser.RULE_expression);
							this.state = 419;
							if (!(this.precpred(this._ctx, 10))) {
								throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
							}
							this.state = 420;
							this.match(GameMakerLanguageParser.Xor);
							this.state = 421;
							this.expression(11);
							break;

						case 8:
							localctx = new EqualityExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
							this.pushNewRecursionContext(localctx, _startState, GameMakerLanguageParser.RULE_expression);
							this.state = 422;
							if (!(this.precpred(this._ctx, 9))) {
								throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
							}
							this.state = 423;
							_la = this._input.LA(1);
							if (!(((((_la - 21)) & ~0x1f) === 0 && ((1 << (_la - 21)) & 25165825) !== 0))) {
								this._errHandler.recoverInline(this);
							}
							else {
								this._errHandler.reportMatch(this);
								this.consume();
							}
							this.state = 424;
							this.expression(10);
							break;

						case 9:
							localctx = new RelationalExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
							this.pushNewRecursionContext(localctx, _startState, GameMakerLanguageParser.RULE_expression);
							this.state = 425;
							if (!(this.precpred(this._ctx, 8))) {
								throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
							}
							this.state = 426;
							_la = this._input.LA(1);
							if (!(((((_la - 40)) & ~0x1f) === 0 && ((1 << (_la - 40)) & 15) !== 0))) {
								this._errHandler.recoverInline(this);
							}
							else {
								this._errHandler.reportMatch(this);
								this.consume();
							}
							this.state = 427;
							this.expression(9);
							break;

						case 10:
							localctx = new BitAndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
							this.pushNewRecursionContext(localctx, _startState, GameMakerLanguageParser.RULE_expression);
							this.state = 428;
							if (!(this.precpred(this._ctx, 7))) {
								throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
							}
							this.state = 429;
							this.match(GameMakerLanguageParser.BitAnd);
							this.state = 430;
							this.expression(8);
							break;

						case 11:
							localctx = new BitOrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
							this.pushNewRecursionContext(localctx, _startState, GameMakerLanguageParser.RULE_expression);
							this.state = 431;
							if (!(this.precpred(this._ctx, 6))) {
								throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
							}
							this.state = 432;
							this.match(GameMakerLanguageParser.BitOr);
							this.state = 433;
							this.expression(7);
							break;

						case 12:
							localctx = new BitXOrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
							this.pushNewRecursionContext(localctx, _startState, GameMakerLanguageParser.RULE_expression);
							this.state = 434;
							if (!(this.precpred(this._ctx, 5))) {
								throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
							}
							this.state = 435;
							this.match(GameMakerLanguageParser.BitXOr);
							this.state = 436;
							this.expression(6);
							break;

						case 13:
							localctx = new TernaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
							this.pushNewRecursionContext(localctx, _startState, GameMakerLanguageParser.RULE_expression);
							this.state = 437;
							if (!(this.precpred(this._ctx, 4))) {
								throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
							}
							this.state = 438;
							this.match(GameMakerLanguageParser.QuestionMark);
							this.state = 439;
							this.expression(0);
							this.state = 440;
							this.match(GameMakerLanguageParser.Colon);
							this.state = 441;
							this.expression(5);
							break;

					}
				}
				this.state = 447;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 36, this._ctx);
			}

		} catch (error) {
			if (error instanceof antlr4.error.RecognitionException) {
				localctx.exception = error;
				this._errHandler.reportError(this, error);
				this._errHandler.recover(this, error);
			} else {
				throw error;
			}
		} finally {
			this.unrollRecursionContexts(_parentctx)
		}
		return localctx;
	}


	callStatement(_p) {
		if (_p === undefined) {
			_p = 0;
		}
		const _parentctx = this._ctx;
		const _parentState = this.state;
		let localctx = new CallStatementContext(this, this._ctx, _parentState);
		let _prevctx = localctx;
		const _startState = 70;
		this.enterRecursionRule(localctx, 70, GameMakerLanguageParser.RULE_callStatement, _p);
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 449;
			this.callableExpression();
			this.state = 451;
			this._errHandler.sync(this);
			var la_ = this._interp.adaptivePredict(this._input, 37, this._ctx);
			if (la_ === 1) {
				this.state = 450;
				this.arguments();

			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 457;
			this._errHandler.sync(this);
			var _alt = this._interp.adaptivePredict(this._input, 38, this._ctx)
			while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners !== null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					localctx = new CallStatementContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, GameMakerLanguageParser.RULE_callStatement);
					this.state = 453;
					if (!(this.precpred(this._ctx, 1))) {
						throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 454;
					this.arguments();
				}
				this.state = 459;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 38, this._ctx);
			}

		} catch (error) {
			if (error instanceof antlr4.error.RecognitionException) {
				localctx.exception = error;
				this._errHandler.reportError(this, error);
				this._errHandler.recover(this, error);
			} else {
				throw error;
			}
		} finally {
			this.unrollRecursionContexts(_parentctx)
		}
		return localctx;
	}



	callableExpression() {
		let localctx = new CallableExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, GameMakerLanguageParser.RULE_callableExpression);
		try {
			this.state = 468;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case 77:
				case 97:
				case 99:
				case 100:
				case 101:
				case 107:
					this.enterOuterAlt(localctx, 1);
					this.state = 460;
					this.lValueExpression();
					break;
				case 12:
					this.enterOuterAlt(localctx, 2);
					this.state = 461;
					this.match(GameMakerLanguageParser.OpenParen);
					this.state = 464;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
						case 89:
							this.state = 462;
							this.functionDeclaration();
							break;
						case 12:
						case 77:
						case 97:
						case 99:
						case 100:
						case 101:
						case 107:
							this.state = 463;
							this.callableExpression();
							break;
						default:
							throw new antlr4.error.NoViableAltException(this);
					}
					this.state = 466;
					this.match(GameMakerLanguageParser.CloseParen);
					break;
				default:
					throw new antlr4.error.NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	incDecStatement() {
		let localctx = new IncDecStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, GameMakerLanguageParser.RULE_incDecStatement);
		var _la = 0;
		try {
			this.state = 475;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case 24:
				case 25:
					localctx = new PreIncDecExpressionContext(this, localctx);
					this.enterOuterAlt(localctx, 1);
					this.state = 470;
					_la = this._input.LA(1);
					if (!(_la === 24 || _la === 25)) {
						this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 471;
					this.lValueExpression();
					break;
				case 77:
				case 97:
				case 99:
				case 100:
				case 101:
				case 107:
					localctx = new PostIncDecExpressionContext(this, localctx);
					this.enterOuterAlt(localctx, 2);
					this.state = 472;
					this.lValueExpression();
					this.state = 473;
					_la = this._input.LA(1);
					if (!(_la === 24 || _la === 25)) {
						this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
						this.consume();
					}
					break;
				default:
					throw new antlr4.error.NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	accessor() {
		let localctx = new AccessorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, GameMakerLanguageParser.RULE_accessor);
		var _la = 0;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 477;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1f) === 0 && ((1 << _la) & 2016) !== 0))) {
				this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
				this.consume();
			}
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	arguments() {
		let localctx = new ArgumentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, GameMakerLanguageParser.RULE_arguments);
		var _la = 0;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 479;
			this.match(GameMakerLanguageParser.OpenParen);
			this.state = 491;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1f) === 0 && ((1 << _la) & 939675680) !== 0) || ((((_la - 65)) & ~0x1f) === 0 && ((1 << (_la - 65)) & 16781439) !== 0) || ((((_la - 97)) & ~0x1f) === 0 && ((1 << (_la - 97)) & 15389) !== 0)) {
				this.state = 480;
				this.expressionOrFunction();
				this.state = 485;
				this._errHandler.sync(this);
				var _alt = this._interp.adaptivePredict(this._input, 42, this._ctx)
				while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						this.state = 481;
						this.match(GameMakerLanguageParser.Comma);
						this.state = 482;
						this.expressionOrFunction();
					}
					this.state = 487;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 42, this._ctx);
				}

				this.state = 489;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === 20) {
					this.state = 488;
					this.match(GameMakerLanguageParser.Comma);
				}

			}

			this.state = 493;
			this.match(GameMakerLanguageParser.CloseParen);
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	assignmentOperator() {
		let localctx = new AssignmentOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, GameMakerLanguageParser.RULE_assignmentOperator);
		var _la = 0;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 495;
			_la = this._input.LA(1);
			if (!(_la === 21 || ((((_la - 37)) & ~0x1f) === 0 && ((1 << (_la - 37)) & 33521665) !== 0))) {
				this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
				this.consume();
			}
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	literal() {
		let localctx = new LiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, GameMakerLanguageParser.RULE_literal);
		try {
			this.state = 509;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case 70:
					this.enterOuterAlt(localctx, 1);
					this.state = 497;
					this.match(GameMakerLanguageParser.Undefined);
					break;
				case 71:
					this.enterOuterAlt(localctx, 2);
					this.state = 498;
					this.match(GameMakerLanguageParser.NoOne);
					break;
				case 65:
					this.enterOuterAlt(localctx, 3);
					this.state = 499;
					this.match(GameMakerLanguageParser.BooleanLiteral);
					break;
				case 108:
					this.enterOuterAlt(localctx, 4);
					this.state = 500;
					this.match(GameMakerLanguageParser.StringLiteral);
					break;
				case 110:
					this.enterOuterAlt(localctx, 5);
					this.state = 501;
					this.match(GameMakerLanguageParser.VerbatimStringLiteral);
					break;
				case 109:
					this.enterOuterAlt(localctx, 6);
					this.state = 502;
					this.templateStringLiteral();
					break;
				case 69:
					this.enterOuterAlt(localctx, 7);
					this.state = 503;
					this.match(GameMakerLanguageParser.HexIntegerLiteral);
					break;
				case 68:
					this.enterOuterAlt(localctx, 8);
					this.state = 504;
					this.match(GameMakerLanguageParser.BinaryLiteral);
					break;
				case 67:
					this.enterOuterAlt(localctx, 9);
					this.state = 505;
					this.match(GameMakerLanguageParser.DecimalLiteral);
					break;
				case 66:
					this.enterOuterAlt(localctx, 10);
					this.state = 506;
					this.match(GameMakerLanguageParser.IntegerLiteral);
					break;
				case 5:
					this.enterOuterAlt(localctx, 11);
					this.state = 507;
					this.arrayLiteral();
					break;
				case 14:
				case 17:
					this.enterOuterAlt(localctx, 12);
					this.state = 508;
					this.structLiteral();
					break;
				default:
					throw new antlr4.error.NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	templateStringLiteral() {
		let localctx = new TemplateStringLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, GameMakerLanguageParser.RULE_templateStringLiteral);
		var _la = 0;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 511;
			this.match(GameMakerLanguageParser.TemplateStringStart);
			this.state = 515;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === 117 || _la === 118) {
				this.state = 512;
				this.templateStringAtom();
				this.state = 517;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 518;
			this.match(GameMakerLanguageParser.TemplateStringEnd);
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	templateStringAtom() {
		let localctx = new TemplateStringAtomContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, GameMakerLanguageParser.RULE_templateStringAtom);
		try {
			this.state = 525;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case 118:
					this.enterOuterAlt(localctx, 1);
					this.state = 520;
					this.match(GameMakerLanguageParser.TemplateStringText);
					break;
				case 117:
					this.enterOuterAlt(localctx, 2);
					this.state = 521;
					this.match(GameMakerLanguageParser.TemplateStringStartExpression);
					this.state = 522;
					this.expression(0);
					this.state = 523;
					this.match(GameMakerLanguageParser.TemplateStringEndExpression);
					break;
				default:
					throw new antlr4.error.NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	arrayLiteral() {
		let localctx = new ArrayLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, GameMakerLanguageParser.RULE_arrayLiteral);
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 527;
			this.match(GameMakerLanguageParser.OpenBracket);
			this.state = 528;
			this.elementList();
			this.state = 529;
			this.match(GameMakerLanguageParser.CloseBracket);
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	elementList() {
		let localctx = new ElementListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, GameMakerLanguageParser.RULE_elementList);
		var _la = 0;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 534;
			this._errHandler.sync(this);
			var _alt = this._interp.adaptivePredict(this._input, 48, this._ctx)
			while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					this.state = 531;
					this.match(GameMakerLanguageParser.Comma);
				}
				this.state = 536;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 48, this._ctx);
			}

			this.state = 538;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1f) === 0 && ((1 << _la) & 939675680) !== 0) || ((((_la - 65)) & ~0x1f) === 0 && ((1 << (_la - 65)) & 16781439) !== 0) || ((((_la - 97)) & ~0x1f) === 0 && ((1 << (_la - 97)) & 15389) !== 0)) {
				this.state = 537;
				this.expressionOrFunction();
			}

			this.state = 548;
			this._errHandler.sync(this);
			var _alt = this._interp.adaptivePredict(this._input, 51, this._ctx)
			while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					this.state = 541;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						this.state = 540;
						this.match(GameMakerLanguageParser.Comma);
						this.state = 543;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === 20);
					this.state = 545;
					this.expressionOrFunction();
				}
				this.state = 550;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 51, this._ctx);
			}

			this.state = 552;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === 20) {
				this.state = 551;
				this.match(GameMakerLanguageParser.Comma);
			}

		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	structLiteral() {
		let localctx = new StructLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, GameMakerLanguageParser.RULE_structLiteral);
		var _la = 0;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 554;
			this.openBlock();
			this.state = 566;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 71)) & ~0x1f) === 0 && ((1 << (_la - 71)) & 1946157057) !== 0) || _la === 107) {
				this.state = 555;
				this.propertyAssignment();
				this.state = 560;
				this._errHandler.sync(this);
				var _alt = this._interp.adaptivePredict(this._input, 53, this._ctx)
				while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						this.state = 556;
						this.match(GameMakerLanguageParser.Comma);
						this.state = 557;
						this.propertyAssignment();
					}
					this.state = 562;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 53, this._ctx);
				}

				this.state = 564;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === 20) {
					this.state = 563;
					this.match(GameMakerLanguageParser.Comma);
				}

			}

			this.state = 568;
			this.closeBlock();
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	propertyAssignment() {
		let localctx = new PropertyAssignmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, GameMakerLanguageParser.RULE_propertyAssignment);
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 570;
			this.propertyIdentifier();
			this.state = 571;
			this.match(GameMakerLanguageParser.Colon);
			this.state = 572;
			this.expressionOrFunction();
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	propertyIdentifier() {
		let localctx = new PropertyIdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, GameMakerLanguageParser.RULE_propertyIdentifier);
		try {
			this.state = 577;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case 107:
					this.enterOuterAlt(localctx, 1);
					this.state = 574;
					this.match(GameMakerLanguageParser.Identifier);
					break;
				case 97:
				case 99:
				case 100:
				case 101:
					this.enterOuterAlt(localctx, 2);
					this.state = 575;
					this.softKeyword();
					break;
				case 71:
					this.enterOuterAlt(localctx, 3);
					this.state = 576;
					this.propertySoftKeyword();
					break;
				default:
					throw new antlr4.error.NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	inheritanceClause() {
		let localctx = new InheritanceClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, GameMakerLanguageParser.RULE_inheritanceClause);
		var _la = 0;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 579;
			this.match(GameMakerLanguageParser.Colon);
			this.state = 580;
			this.identifier();
			this.state = 582;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === 12) {
				this.state = 581;
				this.arguments();
			}

		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	structDeclaration() {
		let localctx = new StructDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, GameMakerLanguageParser.RULE_structDeclaration);
		var _la = 0;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 584;
			this.match(GameMakerLanguageParser.Function);
			this.state = 585;
			this.identifier();
			this.state = 596;
			this._errHandler.sync(this);
			var la_ = this._interp.adaptivePredict(this._input, 60, this._ctx);
			switch (la_) {
				case 1:
					this.state = 587;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === 12) {
						this.state = 586;
						this.parameterList();
					}

					this.state = 589;
					this.match(GameMakerLanguageParser.Constructor);
					this.state = 590;
					this.block();
					break;

				case 2:
					this.state = 591;
					this.match(GameMakerLanguageParser.Constructor);
					this.state = 593;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === 12) {
						this.state = 592;
						this.parameterList();
					}

					this.state = 595;
					this.block();
					break;

			}
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	functionDeclaration() {
		let localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, GameMakerLanguageParser.RULE_functionDeclaration);
		var _la = 0;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 598;
			this.match(GameMakerLanguageParser.Function);
			this.state = 600;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === 107) {
				this.state = 599;
				this.match(GameMakerLanguageParser.Identifier);
			}

			this.state = 602;
			this.parameterList();
			this.state = 603;
			this.block();
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	parameterList() {
		let localctx = new ParameterListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, GameMakerLanguageParser.RULE_parameterList);
		var _la = 0;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 605;
			this.match(GameMakerLanguageParser.OpenParen);
			this.state = 617;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 97)) & ~0x1f) === 0 && ((1 << (_la - 97)) & 1053) !== 0)) {
				this.state = 606;
				this.parameterArgument();
				this.state = 611;
				this._errHandler.sync(this);
				var _alt = this._interp.adaptivePredict(this._input, 62, this._ctx)
				while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						this.state = 607;
						this.match(GameMakerLanguageParser.Comma);
						this.state = 608;
						this.parameterArgument();
					}
					this.state = 613;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
				}

				this.state = 615;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === 20) {
					this.state = 614;
					this.match(GameMakerLanguageParser.Comma);
				}

			}

			this.state = 619;
			this.match(GameMakerLanguageParser.CloseParen);
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	parameterArgument() {
		let localctx = new ParameterArgumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, GameMakerLanguageParser.RULE_parameterArgument);
		var _la = 0;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 621;
			this.identifier();
			this.state = 624;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === 21) {
				this.state = 622;
				this.match(GameMakerLanguageParser.Assign);
				this.state = 623;
				this.expressionOrFunction();
			}

		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	identifier() {
		let localctx = new IdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, GameMakerLanguageParser.RULE_identifier);
		try {
			this.state = 628;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case 107:
					this.enterOuterAlt(localctx, 1);
					this.state = 626;
					this.match(GameMakerLanguageParser.Identifier);
					break;
				case 97:
				case 99:
				case 100:
				case 101:
					this.enterOuterAlt(localctx, 2);
					this.state = 627;
					this.softKeyword();
					break;
				default:
					throw new antlr4.error.NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	enumeratorDeclaration() {
		let localctx = new EnumeratorDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, GameMakerLanguageParser.RULE_enumeratorDeclaration);
		var _la = 0;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 630;
			this.match(GameMakerLanguageParser.Enum);
			this.state = 631;
			this.identifier();
			this.state = 632;
			this.openBlock();
			this.state = 634;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 97)) & ~0x1f) === 0 && ((1 << (_la - 97)) & 1053) !== 0)) {
				this.state = 633;
				this.enumeratorList();
			}

			this.state = 636;
			this.closeBlock();
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	enumeratorList() {
		let localctx = new EnumeratorListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, GameMakerLanguageParser.RULE_enumeratorList);
		var _la = 0;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 638;
			this.enumerator();
			this.state = 643;
			this._errHandler.sync(this);
			var _alt = this._interp.adaptivePredict(this._input, 68, this._ctx)
			while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					this.state = 639;
					this.match(GameMakerLanguageParser.Comma);
					this.state = 640;
					this.enumerator();
				}
				this.state = 645;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 68, this._ctx);
			}

			this.state = 647;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === 20) {
				this.state = 646;
				this.match(GameMakerLanguageParser.Comma);
			}

		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	enumerator() {
		let localctx = new EnumeratorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, GameMakerLanguageParser.RULE_enumerator);
		var _la = 0;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 649;
			this.identifier();
			this.state = 652;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === 21) {
				this.state = 650;
				this.match(GameMakerLanguageParser.Assign);
				this.state = 651;
				_la = this._input.LA(1);
				if (!(((((_la - 66)) & ~0x1f) === 0 && ((1 << (_la - 66)) & 13) !== 0))) {
					this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
					this.consume();
				}
			}

		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	macroStatement() {
		let localctx = new MacroStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, GameMakerLanguageParser.RULE_macroStatement);
		var _la = 0;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 654;
			this.match(GameMakerLanguageParser.Macro);
			this.state = 655;
			this.identifier();
			this.state = 657;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				this.state = 656;
				this.macroToken();
				this.state = 659;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967264) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1f) === 0 && ((1 << (_la - 96)) & 7370887) !== 0));
			this.state = 661;
			_la = this._input.LA(1);
			if (!(_la === -1 || _la === 112)) {
				this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
				this.consume();
			}
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	defineStatement() {
		let localctx = new DefineStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, GameMakerLanguageParser.RULE_defineStatement);
		var _la = 0;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 663;
			this.match(GameMakerLanguageParser.Define);
			this.state = 664;
			this.match(GameMakerLanguageParser.RegionCharacters);
			this.state = 665;
			_la = this._input.LA(1);
			if (!(_la === -1 || _la === 115)) {
				this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
				this.consume();
			}
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	regionStatement() {
		let localctx = new RegionStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, GameMakerLanguageParser.RULE_regionStatement);
		var _la = 0;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 667;
			_la = this._input.LA(1);
			if (!(_la === 105 || _la === 106)) {
				this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 669;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === 114) {
				this.state = 668;
				this.match(GameMakerLanguageParser.RegionCharacters);
			}

			this.state = 671;
			_la = this._input.LA(1);
			if (!(_la === -1 || _la === 115)) {
				this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
				this.consume();
			}
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	identifierStatement() {
		let localctx = new IdentifierStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, GameMakerLanguageParser.RULE_identifierStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 673;
			this.identifier();
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	softKeyword() {
		let localctx = new SoftKeywordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, GameMakerLanguageParser.RULE_softKeyword);
		var _la = 0;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 675;
			_la = this._input.LA(1);
			if (!(((((_la - 97)) & ~0x1f) === 0 && ((1 << (_la - 97)) & 29) !== 0))) {
				this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
				this.consume();
			}
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	propertySoftKeyword() {
		let localctx = new PropertySoftKeywordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, GameMakerLanguageParser.RULE_propertySoftKeyword);
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 677;
			this.match(GameMakerLanguageParser.NoOne);
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	openBlock() {
		let localctx = new OpenBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, GameMakerLanguageParser.RULE_openBlock);
		var _la = 0;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 679;
			_la = this._input.LA(1);
			if (!(_la === 14 || _la === 17)) {
				this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
				this.consume();
			}
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	closeBlock() {
		let localctx = new CloseBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, GameMakerLanguageParser.RULE_closeBlock);
		var _la = 0;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 681;
			_la = this._input.LA(1);
			if (!(_la === 16 || _la === 18)) {
				this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
				this.consume();
			}
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	eos() {
		let localctx = new EosContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, GameMakerLanguageParser.RULE_eos);
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 683;
			this.match(GameMakerLanguageParser.SemiColon);
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	macroToken() {
		let localctx = new MacroTokenContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, GameMakerLanguageParser.RULE_macroToken);
		var _la = 0;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 685;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967264) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1f) === 0 && ((1 << (_la - 96)) & 7370887) !== 0))) {
				this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
				this.consume();
			}
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}


}

GameMakerLanguageParser.EOF = antlr4.Token.EOF;
GameMakerLanguageParser.MultiLineComment = 1;
GameMakerLanguageParser.SingleLineComment = 2;
GameMakerLanguageParser.InlineComment = 3;
GameMakerLanguageParser.LineContinuation = 4;
GameMakerLanguageParser.OpenBracket = 5;
GameMakerLanguageParser.ListAccessor = 6;
GameMakerLanguageParser.MapAccessor = 7;
GameMakerLanguageParser.GridAccessor = 8;
GameMakerLanguageParser.ArrayAccessor = 9;
GameMakerLanguageParser.StructAccessor = 10;
GameMakerLanguageParser.CloseBracket = 11;
GameMakerLanguageParser.OpenParen = 12;
GameMakerLanguageParser.CloseParen = 13;
GameMakerLanguageParser.OpenBrace = 14;
GameMakerLanguageParser.TemplateStringEndExpression = 15;
GameMakerLanguageParser.CloseBrace = 16;
GameMakerLanguageParser.Begin = 17;
GameMakerLanguageParser.End = 18;
GameMakerLanguageParser.SemiColon = 19;
GameMakerLanguageParser.Comma = 20;
GameMakerLanguageParser.Assign = 21;
GameMakerLanguageParser.Colon = 22;
GameMakerLanguageParser.Dot = 23;
GameMakerLanguageParser.PlusPlus = 24;
GameMakerLanguageParser.MinusMinus = 25;
GameMakerLanguageParser.Plus = 26;
GameMakerLanguageParser.Minus = 27;
GameMakerLanguageParser.BitNot = 28;
GameMakerLanguageParser.Not = 29;
GameMakerLanguageParser.Multiply = 30;
GameMakerLanguageParser.Divide = 31;
GameMakerLanguageParser.IntegerDivide = 32;
GameMakerLanguageParser.Modulo = 33;
GameMakerLanguageParser.Power = 34;
GameMakerLanguageParser.QuestionMark = 35;
GameMakerLanguageParser.NullCoalesce = 36;
GameMakerLanguageParser.NullCoalescingAssign = 37;
GameMakerLanguageParser.RightShiftArithmetic = 38;
GameMakerLanguageParser.LeftShiftArithmetic = 39;
GameMakerLanguageParser.LessThan = 40;
GameMakerLanguageParser.MoreThan = 41;
GameMakerLanguageParser.LessThanEquals = 42;
GameMakerLanguageParser.GreaterThanEquals = 43;
GameMakerLanguageParser.Equals_ = 44;
GameMakerLanguageParser.NotEquals = 45;
GameMakerLanguageParser.BitAnd = 46;
GameMakerLanguageParser.BitXOr = 47;
GameMakerLanguageParser.BitOr = 48;
GameMakerLanguageParser.And = 49;
GameMakerLanguageParser.Or = 50;
GameMakerLanguageParser.Xor = 51;
GameMakerLanguageParser.MultiplyAssign = 52;
GameMakerLanguageParser.DivideAssign = 53;
GameMakerLanguageParser.PlusAssign = 54;
GameMakerLanguageParser.MinusAssign = 55;
GameMakerLanguageParser.ModulusAssign = 56;
GameMakerLanguageParser.LeftShiftArithmeticAssign = 57;
GameMakerLanguageParser.RightShiftArithmeticAssign = 58;
GameMakerLanguageParser.BitAndAssign = 59;
GameMakerLanguageParser.BitXorAssign = 60;
GameMakerLanguageParser.BitOrAssign = 61;
GameMakerLanguageParser.NumberSign = 62;
GameMakerLanguageParser.DollarSign = 63;
GameMakerLanguageParser.AtSign = 64;
GameMakerLanguageParser.BooleanLiteral = 65;
GameMakerLanguageParser.IntegerLiteral = 66;
GameMakerLanguageParser.DecimalLiteral = 67;
GameMakerLanguageParser.BinaryLiteral = 68;
GameMakerLanguageParser.HexIntegerLiteral = 69;
GameMakerLanguageParser.Undefined = 70;
GameMakerLanguageParser.NoOne = 71;
GameMakerLanguageParser.Break = 72;
GameMakerLanguageParser.Exit = 73;
GameMakerLanguageParser.Do = 74;
GameMakerLanguageParser.Case = 75;
GameMakerLanguageParser.Else = 76;
GameMakerLanguageParser.New = 77;
GameMakerLanguageParser.Var = 78;
GameMakerLanguageParser.GlobalVar = 79;
GameMakerLanguageParser.Catch = 80;
GameMakerLanguageParser.Finally = 81;
GameMakerLanguageParser.Return = 82;
GameMakerLanguageParser.Continue = 83;
GameMakerLanguageParser.For = 84;
GameMakerLanguageParser.Switch = 85;
GameMakerLanguageParser.While = 86;
GameMakerLanguageParser.Until = 87;
GameMakerLanguageParser.Repeat = 88;
GameMakerLanguageParser.Function = 89;
GameMakerLanguageParser.With = 90;
GameMakerLanguageParser.Default = 91;
GameMakerLanguageParser.If = 92;
GameMakerLanguageParser.Throw = 93;
GameMakerLanguageParser.Delete = 94;
GameMakerLanguageParser.Try = 95;
GameMakerLanguageParser.Enum = 96;
GameMakerLanguageParser.Constructor = 97;
GameMakerLanguageParser.Static = 98;
GameMakerLanguageParser.Self = 99;
GameMakerLanguageParser.Other = 100;
GameMakerLanguageParser.All = 101;
GameMakerLanguageParser.Macro = 102;
GameMakerLanguageParser.EscapedNewLine = 103;
GameMakerLanguageParser.Define = 104;
GameMakerLanguageParser.Region = 105;
GameMakerLanguageParser.EndRegion = 106;
GameMakerLanguageParser.Identifier = 107;
GameMakerLanguageParser.StringLiteral = 108;
GameMakerLanguageParser.TemplateStringStart = 109;
GameMakerLanguageParser.VerbatimStringLiteral = 110;
GameMakerLanguageParser.WhiteSpaces = 111;
GameMakerLanguageParser.LineTerminator = 112;
GameMakerLanguageParser.UnexpectedCharacter = 113;
GameMakerLanguageParser.RegionCharacters = 114;
GameMakerLanguageParser.RegionEOL = 115;
GameMakerLanguageParser.TemplateStringEnd = 116;
GameMakerLanguageParser.TemplateStringStartExpression = 117;
GameMakerLanguageParser.TemplateStringText = 118;

GameMakerLanguageParser.RULE_program = 0;
GameMakerLanguageParser.RULE_statementList = 1;
GameMakerLanguageParser.RULE_statement = 2;
GameMakerLanguageParser.RULE_block = 3;
GameMakerLanguageParser.RULE_ifStatement = 4;
GameMakerLanguageParser.RULE_iterationStatement = 5;
GameMakerLanguageParser.RULE_withStatement = 6;
GameMakerLanguageParser.RULE_switchStatement = 7;
GameMakerLanguageParser.RULE_continueStatement = 8;
GameMakerLanguageParser.RULE_breakStatement = 9;
GameMakerLanguageParser.RULE_exitStatement = 10;
GameMakerLanguageParser.RULE_emptyStatement = 11;
GameMakerLanguageParser.RULE_caseBlock = 12;
GameMakerLanguageParser.RULE_caseClauses = 13;
GameMakerLanguageParser.RULE_caseClause = 14;
GameMakerLanguageParser.RULE_defaultClause = 15;
GameMakerLanguageParser.RULE_throwStatement = 16;
GameMakerLanguageParser.RULE_tryStatement = 17;
GameMakerLanguageParser.RULE_catchProduction = 18;
GameMakerLanguageParser.RULE_finallyProduction = 19;
GameMakerLanguageParser.RULE_returnStatement = 20;
GameMakerLanguageParser.RULE_deleteStatement = 21;
GameMakerLanguageParser.RULE_assignmentExpression = 22;
GameMakerLanguageParser.RULE_variableDeclarationList = 23;
GameMakerLanguageParser.RULE_varModifier = 24;
GameMakerLanguageParser.RULE_variableDeclaration = 25;
GameMakerLanguageParser.RULE_globalVarStatement = 26;
GameMakerLanguageParser.RULE_newExpression = 27;
GameMakerLanguageParser.RULE_lValueStartExpression = 28;
GameMakerLanguageParser.RULE_lValueExpression = 29;
GameMakerLanguageParser.RULE_lValueChainOperator = 30;
GameMakerLanguageParser.RULE_lValueFinalOperator = 31;
GameMakerLanguageParser.RULE_expressionSequence = 32;
GameMakerLanguageParser.RULE_expressionOrFunction = 33;
GameMakerLanguageParser.RULE_expression = 34;
GameMakerLanguageParser.RULE_callStatement = 35;
GameMakerLanguageParser.RULE_callableExpression = 36;
GameMakerLanguageParser.RULE_incDecStatement = 37;
GameMakerLanguageParser.RULE_accessor = 38;
GameMakerLanguageParser.RULE_arguments = 39;
GameMakerLanguageParser.RULE_assignmentOperator = 40;
GameMakerLanguageParser.RULE_literal = 41;
GameMakerLanguageParser.RULE_templateStringLiteral = 42;
GameMakerLanguageParser.RULE_templateStringAtom = 43;
GameMakerLanguageParser.RULE_arrayLiteral = 44;
GameMakerLanguageParser.RULE_elementList = 45;
GameMakerLanguageParser.RULE_structLiteral = 46;
GameMakerLanguageParser.RULE_propertyAssignment = 47;
GameMakerLanguageParser.RULE_propertyIdentifier = 48;
GameMakerLanguageParser.RULE_inheritanceClause = 49;
GameMakerLanguageParser.RULE_structDeclaration = 50;
GameMakerLanguageParser.RULE_functionDeclaration = 51;
GameMakerLanguageParser.RULE_parameterList = 52;
GameMakerLanguageParser.RULE_parameterArgument = 53;
GameMakerLanguageParser.RULE_identifier = 54;
GameMakerLanguageParser.RULE_enumeratorDeclaration = 55;
GameMakerLanguageParser.RULE_enumeratorList = 56;
GameMakerLanguageParser.RULE_enumerator = 57;
GameMakerLanguageParser.RULE_macroStatement = 58;
GameMakerLanguageParser.RULE_defineStatement = 59;
GameMakerLanguageParser.RULE_regionStatement = 60;
GameMakerLanguageParser.RULE_identifierStatement = 61;
GameMakerLanguageParser.RULE_softKeyword = 62;
GameMakerLanguageParser.RULE_propertySoftKeyword = 63;
GameMakerLanguageParser.RULE_openBlock = 64;
GameMakerLanguageParser.RULE_closeBlock = 65;
GameMakerLanguageParser.RULE_eos = 66;
GameMakerLanguageParser.RULE_macroToken = 67;

class ProgramContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_program;
	}

	EOF() {
		return this.getToken(GameMakerLanguageParser.EOF, 0);
	};

	statementList() {
		return this.getTypedRuleContext(StatementListContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterProgram(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitProgram(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class StatementListContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_statementList;
	}

	statement = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTypedRuleContexts(StatementContext);
		} else {
			return this.getTypedRuleContext(StatementContext, i);
		}
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterStatementList(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitStatementList(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitStatementList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_statement;
	}

	block() {
		return this.getTypedRuleContext(BlockContext, 0);
	};

	emptyStatement() {
		return this.getTypedRuleContext(EmptyStatementContext, 0);
	};

	ifStatement() {
		return this.getTypedRuleContext(IfStatementContext, 0);
	};

	variableDeclarationList() {
		return this.getTypedRuleContext(VariableDeclarationListContext, 0);
	};

	iterationStatement() {
		return this.getTypedRuleContext(IterationStatementContext, 0);
	};

	continueStatement() {
		return this.getTypedRuleContext(ContinueStatementContext, 0);
	};

	breakStatement() {
		return this.getTypedRuleContext(BreakStatementContext, 0);
	};

	returnStatement() {
		return this.getTypedRuleContext(ReturnStatementContext, 0);
	};

	withStatement() {
		return this.getTypedRuleContext(WithStatementContext, 0);
	};

	switchStatement() {
		return this.getTypedRuleContext(SwitchStatementContext, 0);
	};

	tryStatement() {
		return this.getTypedRuleContext(TryStatementContext, 0);
	};

	structDeclaration() {
		return this.getTypedRuleContext(StructDeclarationContext, 0);
	};

	throwStatement() {
		return this.getTypedRuleContext(ThrowStatementContext, 0);
	};

	exitStatement() {
		return this.getTypedRuleContext(ExitStatementContext, 0);
	};

	macroStatement() {
		return this.getTypedRuleContext(MacroStatementContext, 0);
	};

	defineStatement() {
		return this.getTypedRuleContext(DefineStatementContext, 0);
	};

	regionStatement() {
		return this.getTypedRuleContext(RegionStatementContext, 0);
	};

	enumeratorDeclaration() {
		return this.getTypedRuleContext(EnumeratorDeclarationContext, 0);
	};

	globalVarStatement() {
		return this.getTypedRuleContext(GlobalVarStatementContext, 0);
	};

	assignmentExpression() {
		return this.getTypedRuleContext(AssignmentExpressionContext, 0);
	};

	incDecStatement() {
		return this.getTypedRuleContext(IncDecStatementContext, 0);
	};

	callStatement() {
		return this.getTypedRuleContext(CallStatementContext, 0);
	};

	functionDeclaration() {
		return this.getTypedRuleContext(FunctionDeclarationContext, 0);
	};

	eos() {
		return this.getTypedRuleContext(EosContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterStatement(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitStatement(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class BlockContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_block;
	}

	openBlock() {
		return this.getTypedRuleContext(OpenBlockContext, 0);
	};

	closeBlock() {
		return this.getTypedRuleContext(CloseBlockContext, 0);
	};

	statementList() {
		return this.getTypedRuleContext(StatementListContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterBlock(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitBlock(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class IfStatementContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_ifStatement;
	}

	If() {
		return this.getToken(GameMakerLanguageParser.If, 0);
	};

	expression() {
		return this.getTypedRuleContext(ExpressionContext, 0);
	};

	statement = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTypedRuleContexts(StatementContext);
		} else {
			return this.getTypedRuleContext(StatementContext, i);
		}
	};

	Else() {
		return this.getToken(GameMakerLanguageParser.Else, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterIfStatement(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitIfStatement(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class IterationStatementContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_iterationStatement;
	}



	copyFrom(ctx) {
		super.copyFrom(ctx);
	}

}


class DoStatementContext extends IterationStatementContext {

	constructor(parser, ctx) {
		super(parser);
		super.copyFrom(ctx);
	}

	Do() {
		return this.getToken(GameMakerLanguageParser.Do, 0);
	};

	statement() {
		return this.getTypedRuleContext(StatementContext, 0);
	};

	Until() {
		return this.getToken(GameMakerLanguageParser.Until, 0);
	};

	expression() {
		return this.getTypedRuleContext(ExpressionContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterDoStatement(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitDoStatement(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitDoStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}

GameMakerLanguageParser.DoStatementContext = DoStatementContext;

class WhileStatementContext extends IterationStatementContext {

	constructor(parser, ctx) {
		super(parser);
		super.copyFrom(ctx);
	}

	While() {
		return this.getToken(GameMakerLanguageParser.While, 0);
	};

	expression() {
		return this.getTypedRuleContext(ExpressionContext, 0);
	};

	statement() {
		return this.getTypedRuleContext(StatementContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterWhileStatement(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitWhileStatement(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}

GameMakerLanguageParser.WhileStatementContext = WhileStatementContext;

class ForStatementContext extends IterationStatementContext {

	constructor(parser, ctx) {
		super(parser);
		super.copyFrom(ctx);
	}

	For() {
		return this.getToken(GameMakerLanguageParser.For, 0);
	};

	OpenParen() {
		return this.getToken(GameMakerLanguageParser.OpenParen, 0);
	};

	SemiColon = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTokens(GameMakerLanguageParser.SemiColon);
		} else {
			return this.getToken(GameMakerLanguageParser.SemiColon, i);
		}
	};


	CloseParen() {
		return this.getToken(GameMakerLanguageParser.CloseParen, 0);
	};

	statement = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTypedRuleContexts(StatementContext);
		} else {
			return this.getTypedRuleContext(StatementContext, i);
		}
	};

	variableDeclarationList() {
		return this.getTypedRuleContext(VariableDeclarationListContext, 0);
	};

	assignmentExpression() {
		return this.getTypedRuleContext(AssignmentExpressionContext, 0);
	};

	expression() {
		return this.getTypedRuleContext(ExpressionContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterForStatement(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitForStatement(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}

GameMakerLanguageParser.ForStatementContext = ForStatementContext;

class RepeatStatementContext extends IterationStatementContext {

	constructor(parser, ctx) {
		super(parser);
		super.copyFrom(ctx);
	}

	Repeat() {
		return this.getToken(GameMakerLanguageParser.Repeat, 0);
	};

	expression() {
		return this.getTypedRuleContext(ExpressionContext, 0);
	};

	statement() {
		return this.getTypedRuleContext(StatementContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterRepeatStatement(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitRepeatStatement(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitRepeatStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}

GameMakerLanguageParser.RepeatStatementContext = RepeatStatementContext;

class WithStatementContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_withStatement;
	}

	With() {
		return this.getToken(GameMakerLanguageParser.With, 0);
	};

	expression() {
		return this.getTypedRuleContext(ExpressionContext, 0);
	};

	statement() {
		return this.getTypedRuleContext(StatementContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterWithStatement(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitWithStatement(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitWithStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class SwitchStatementContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_switchStatement;
	}

	Switch() {
		return this.getToken(GameMakerLanguageParser.Switch, 0);
	};

	expression() {
		return this.getTypedRuleContext(ExpressionContext, 0);
	};

	caseBlock() {
		return this.getTypedRuleContext(CaseBlockContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterSwitchStatement(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitSwitchStatement(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitSwitchStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class ContinueStatementContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_continueStatement;
	}

	Continue() {
		return this.getToken(GameMakerLanguageParser.Continue, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterContinueStatement(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitContinueStatement(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class BreakStatementContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_breakStatement;
	}

	Break() {
		return this.getToken(GameMakerLanguageParser.Break, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterBreakStatement(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitBreakStatement(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class ExitStatementContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_exitStatement;
	}

	Exit() {
		return this.getToken(GameMakerLanguageParser.Exit, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterExitStatement(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitExitStatement(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitExitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class EmptyStatementContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_emptyStatement;
	}

	SemiColon() {
		return this.getToken(GameMakerLanguageParser.SemiColon, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterEmptyStatement(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitEmptyStatement(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitEmptyStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class CaseBlockContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_caseBlock;
	}

	openBlock() {
		return this.getTypedRuleContext(OpenBlockContext, 0);
	};

	closeBlock() {
		return this.getTypedRuleContext(CloseBlockContext, 0);
	};

	caseClauses = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTypedRuleContexts(CaseClausesContext);
		} else {
			return this.getTypedRuleContext(CaseClausesContext, i);
		}
	};

	defaultClause() {
		return this.getTypedRuleContext(DefaultClauseContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterCaseBlock(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitCaseBlock(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitCaseBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class CaseClausesContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_caseClauses;
	}

	caseClause = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTypedRuleContexts(CaseClauseContext);
		} else {
			return this.getTypedRuleContext(CaseClauseContext, i);
		}
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterCaseClauses(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitCaseClauses(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitCaseClauses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class CaseClauseContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_caseClause;
	}

	Case() {
		return this.getToken(GameMakerLanguageParser.Case, 0);
	};

	expression() {
		return this.getTypedRuleContext(ExpressionContext, 0);
	};

	Colon() {
		return this.getToken(GameMakerLanguageParser.Colon, 0);
	};

	statementList() {
		return this.getTypedRuleContext(StatementListContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterCaseClause(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitCaseClause(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitCaseClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class DefaultClauseContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_defaultClause;
	}

	Default() {
		return this.getToken(GameMakerLanguageParser.Default, 0);
	};

	Colon() {
		return this.getToken(GameMakerLanguageParser.Colon, 0);
	};

	statementList() {
		return this.getTypedRuleContext(StatementListContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterDefaultClause(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitDefaultClause(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitDefaultClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class ThrowStatementContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_throwStatement;
	}

	Throw() {
		return this.getToken(GameMakerLanguageParser.Throw, 0);
	};

	expression() {
		return this.getTypedRuleContext(ExpressionContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterThrowStatement(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitThrowStatement(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitThrowStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class TryStatementContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_tryStatement;
	}

	Try() {
		return this.getToken(GameMakerLanguageParser.Try, 0);
	};

	statement() {
		return this.getTypedRuleContext(StatementContext, 0);
	};

	catchProduction() {
		return this.getTypedRuleContext(CatchProductionContext, 0);
	};

	finallyProduction() {
		return this.getTypedRuleContext(FinallyProductionContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterTryStatement(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitTryStatement(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitTryStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class CatchProductionContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_catchProduction;
	}

	Catch() {
		return this.getToken(GameMakerLanguageParser.Catch, 0);
	};

	statement() {
		return this.getTypedRuleContext(StatementContext, 0);
	};

	OpenParen() {
		return this.getToken(GameMakerLanguageParser.OpenParen, 0);
	};

	CloseParen() {
		return this.getToken(GameMakerLanguageParser.CloseParen, 0);
	};

	identifier() {
		return this.getTypedRuleContext(IdentifierContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterCatchProduction(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitCatchProduction(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitCatchProduction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class FinallyProductionContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_finallyProduction;
	}

	Finally() {
		return this.getToken(GameMakerLanguageParser.Finally, 0);
	};

	statement() {
		return this.getTypedRuleContext(StatementContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterFinallyProduction(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitFinallyProduction(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitFinallyProduction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class ReturnStatementContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_returnStatement;
	}

	Return() {
		return this.getToken(GameMakerLanguageParser.Return, 0);
	};

	expression() {
		return this.getTypedRuleContext(ExpressionContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterReturnStatement(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitReturnStatement(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class DeleteStatementContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_deleteStatement;
	}

	Delete() {
		return this.getToken(GameMakerLanguageParser.Delete, 0);
	};

	expression() {
		return this.getTypedRuleContext(ExpressionContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterDeleteStatement(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitDeleteStatement(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitDeleteStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class AssignmentExpressionContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_assignmentExpression;
	}

	lValueExpression() {
		return this.getTypedRuleContext(LValueExpressionContext, 0);
	};

	assignmentOperator() {
		return this.getTypedRuleContext(AssignmentOperatorContext, 0);
	};

	expressionOrFunction() {
		return this.getTypedRuleContext(ExpressionOrFunctionContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterAssignmentExpression(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitAssignmentExpression(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitAssignmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class VariableDeclarationListContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_variableDeclarationList;
	}

	varModifier() {
		return this.getTypedRuleContext(VarModifierContext, 0);
	};

	variableDeclaration = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTypedRuleContexts(VariableDeclarationContext);
		} else {
			return this.getTypedRuleContext(VariableDeclarationContext, i);
		}
	};

	Comma = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTokens(GameMakerLanguageParser.Comma);
		} else {
			return this.getToken(GameMakerLanguageParser.Comma, i);
		}
	};


	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterVariableDeclarationList(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitVariableDeclarationList(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitVariableDeclarationList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class VarModifierContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_varModifier;
	}

	Var = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTokens(GameMakerLanguageParser.Var);
		} else {
			return this.getToken(GameMakerLanguageParser.Var, i);
		}
	};


	Static() {
		return this.getToken(GameMakerLanguageParser.Static, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterVarModifier(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitVarModifier(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitVarModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class VariableDeclarationContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_variableDeclaration;
	}

	identifier() {
		return this.getTypedRuleContext(IdentifierContext, 0);
	};

	Assign() {
		return this.getToken(GameMakerLanguageParser.Assign, 0);
	};

	expressionOrFunction() {
		return this.getTypedRuleContext(ExpressionOrFunctionContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterVariableDeclaration(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitVariableDeclaration(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class GlobalVarStatementContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_globalVarStatement;
	}

	GlobalVar() {
		return this.getToken(GameMakerLanguageParser.GlobalVar, 0);
	};

	identifier = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTypedRuleContexts(IdentifierContext);
		} else {
			return this.getTypedRuleContext(IdentifierContext, i);
		}
	};

	SemiColon() {
		return this.getToken(GameMakerLanguageParser.SemiColon, 0);
	};

	Comma = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTokens(GameMakerLanguageParser.Comma);
		} else {
			return this.getToken(GameMakerLanguageParser.Comma, i);
		}
	};


	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterGlobalVarStatement(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitGlobalVarStatement(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitGlobalVarStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class NewExpressionContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_newExpression;
	}

	New() {
		return this.getToken(GameMakerLanguageParser.New, 0);
	};

	identifier() {
		return this.getTypedRuleContext(IdentifierContext, 0);
	};

	arguments() {
		return this.getTypedRuleContext(ArgumentsContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterNewExpression(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitNewExpression(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitNewExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class LValueStartExpressionContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_lValueStartExpression;
	}



	copyFrom(ctx) {
		super.copyFrom(ctx);
	}

}


class NewLValueContext extends LValueStartExpressionContext {

	constructor(parser, ctx) {
		super(parser);
		super.copyFrom(ctx);
	}

	newExpression() {
		return this.getTypedRuleContext(NewExpressionContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterNewLValue(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitNewLValue(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitNewLValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}

GameMakerLanguageParser.NewLValueContext = NewLValueContext;

class IdentifierLValueContext extends LValueStartExpressionContext {

	constructor(parser, ctx) {
		super(parser);
		super.copyFrom(ctx);
	}

	identifier() {
		return this.getTypedRuleContext(IdentifierContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterIdentifierLValue(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitIdentifierLValue(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitIdentifierLValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}

GameMakerLanguageParser.IdentifierLValueContext = IdentifierLValueContext;

class LValueExpressionContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_lValueExpression;
	}

	lValueStartExpression() {
		return this.getTypedRuleContext(LValueStartExpressionContext, 0);
	};

	lValueFinalOperator() {
		return this.getTypedRuleContext(LValueFinalOperatorContext, 0);
	};

	lValueChainOperator = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTypedRuleContexts(LValueChainOperatorContext);
		} else {
			return this.getTypedRuleContext(LValueChainOperatorContext, i);
		}
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterLValueExpression(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitLValueExpression(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitLValueExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class LValueChainOperatorContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_lValueChainOperator;
	}



	copyFrom(ctx) {
		super.copyFrom(ctx);
	}

}


class MemberDotLValueContext extends LValueChainOperatorContext {

	constructor(parser, ctx) {
		super(parser);
		super.copyFrom(ctx);
	}

	Dot() {
		return this.getToken(GameMakerLanguageParser.Dot, 0);
	};

	identifier() {
		return this.getTypedRuleContext(IdentifierContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterMemberDotLValue(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitMemberDotLValue(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitMemberDotLValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}

GameMakerLanguageParser.MemberDotLValueContext = MemberDotLValueContext;

class CallLValueContext extends LValueChainOperatorContext {

	constructor(parser, ctx) {
		super(parser);
		super.copyFrom(ctx);
	}

	arguments() {
		return this.getTypedRuleContext(ArgumentsContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterCallLValue(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitCallLValue(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitCallLValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}

GameMakerLanguageParser.CallLValueContext = CallLValueContext;

class MemberIndexLValueContext extends LValueChainOperatorContext {

	constructor(parser, ctx) {
		super(parser);
		super.copyFrom(ctx);
	}

	accessor() {
		return this.getTypedRuleContext(AccessorContext, 0);
	};

	expressionSequence() {
		return this.getTypedRuleContext(ExpressionSequenceContext, 0);
	};

	CloseBracket() {
		return this.getToken(GameMakerLanguageParser.CloseBracket, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterMemberIndexLValue(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitMemberIndexLValue(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitMemberIndexLValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}

GameMakerLanguageParser.MemberIndexLValueContext = MemberIndexLValueContext;

class LValueFinalOperatorContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_lValueFinalOperator;
	}



	copyFrom(ctx) {
		super.copyFrom(ctx);
	}

}


class MemberDotLValueFinalContext extends LValueFinalOperatorContext {

	constructor(parser, ctx) {
		super(parser);
		super.copyFrom(ctx);
	}

	Dot() {
		return this.getToken(GameMakerLanguageParser.Dot, 0);
	};

	identifier() {
		return this.getTypedRuleContext(IdentifierContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterMemberDotLValueFinal(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitMemberDotLValueFinal(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitMemberDotLValueFinal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}

GameMakerLanguageParser.MemberDotLValueFinalContext = MemberDotLValueFinalContext;

class MemberIndexLValueFinalContext extends LValueFinalOperatorContext {

	constructor(parser, ctx) {
		super(parser);
		super.copyFrom(ctx);
	}

	accessor() {
		return this.getTypedRuleContext(AccessorContext, 0);
	};

	expressionSequence() {
		return this.getTypedRuleContext(ExpressionSequenceContext, 0);
	};

	CloseBracket() {
		return this.getToken(GameMakerLanguageParser.CloseBracket, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterMemberIndexLValueFinal(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitMemberIndexLValueFinal(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitMemberIndexLValueFinal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}

GameMakerLanguageParser.MemberIndexLValueFinalContext = MemberIndexLValueFinalContext;

class ExpressionSequenceContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_expressionSequence;
	}

	expression = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTypedRuleContexts(ExpressionContext);
		} else {
			return this.getTypedRuleContext(ExpressionContext, i);
		}
	};

	Comma = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTokens(GameMakerLanguageParser.Comma);
		} else {
			return this.getToken(GameMakerLanguageParser.Comma, i);
		}
	};


	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterExpressionSequence(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitExpressionSequence(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitExpressionSequence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class ExpressionOrFunctionContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_expressionOrFunction;
	}

	expression() {
		return this.getTypedRuleContext(ExpressionContext, 0);
	};

	functionDeclaration() {
		return this.getTypedRuleContext(FunctionDeclarationContext, 0);
	};

	OpenParen() {
		return this.getToken(GameMakerLanguageParser.OpenParen, 0);
	};

	expressionOrFunction() {
		return this.getTypedRuleContext(ExpressionOrFunctionContext, 0);
	};

	CloseParen() {
		return this.getToken(GameMakerLanguageParser.CloseParen, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterExpressionOrFunction(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitExpressionOrFunction(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitExpressionOrFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_expression;
	}



	copyFrom(ctx) {
		super.copyFrom(ctx);
	}

}


class ParenthesizedExpressionContext extends ExpressionContext {

	constructor(parser, ctx) {
		super(parser);
		super.copyFrom(ctx);
	}

	OpenParen() {
		return this.getToken(GameMakerLanguageParser.OpenParen, 0);
	};

	expression() {
		return this.getTypedRuleContext(ExpressionContext, 0);
	};

	CloseParen() {
		return this.getToken(GameMakerLanguageParser.CloseParen, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterParenthesizedExpression(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitParenthesizedExpression(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitParenthesizedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}

GameMakerLanguageParser.ParenthesizedExpressionContext = ParenthesizedExpressionContext;

class AdditiveExpressionContext extends ExpressionContext {

	constructor(parser, ctx) {
		super(parser);
		super.copyFrom(ctx);
	}

	expression = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTypedRuleContexts(ExpressionContext);
		} else {
			return this.getTypedRuleContext(ExpressionContext, i);
		}
	};

	Plus() {
		return this.getToken(GameMakerLanguageParser.Plus, 0);
	};

	Minus() {
		return this.getToken(GameMakerLanguageParser.Minus, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterAdditiveExpression(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitAdditiveExpression(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}

GameMakerLanguageParser.AdditiveExpressionContext = AdditiveExpressionContext;

class RelationalExpressionContext extends ExpressionContext {

	constructor(parser, ctx) {
		super(parser);
		super.copyFrom(ctx);
	}

	expression = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTypedRuleContexts(ExpressionContext);
		} else {
			return this.getTypedRuleContext(ExpressionContext, i);
		}
	};

	LessThan() {
		return this.getToken(GameMakerLanguageParser.LessThan, 0);
	};

	MoreThan() {
		return this.getToken(GameMakerLanguageParser.MoreThan, 0);
	};

	LessThanEquals() {
		return this.getToken(GameMakerLanguageParser.LessThanEquals, 0);
	};

	GreaterThanEquals() {
		return this.getToken(GameMakerLanguageParser.GreaterThanEquals, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterRelationalExpression(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitRelationalExpression(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}

GameMakerLanguageParser.RelationalExpressionContext = RelationalExpressionContext;

class TernaryExpressionContext extends ExpressionContext {

	constructor(parser, ctx) {
		super(parser);
		super.copyFrom(ctx);
	}

	expression = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTypedRuleContexts(ExpressionContext);
		} else {
			return this.getTypedRuleContext(ExpressionContext, i);
		}
	};

	QuestionMark() {
		return this.getToken(GameMakerLanguageParser.QuestionMark, 0);
	};

	Colon() {
		return this.getToken(GameMakerLanguageParser.Colon, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterTernaryExpression(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitTernaryExpression(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitTernaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}

GameMakerLanguageParser.TernaryExpressionContext = TernaryExpressionContext;

class LogicalAndExpressionContext extends ExpressionContext {

	constructor(parser, ctx) {
		super(parser);
		super.copyFrom(ctx);
	}

	expression = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTypedRuleContexts(ExpressionContext);
		} else {
			return this.getTypedRuleContext(ExpressionContext, i);
		}
	};

	And() {
		return this.getToken(GameMakerLanguageParser.And, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterLogicalAndExpression(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitLogicalAndExpression(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitLogicalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}

GameMakerLanguageParser.LogicalAndExpressionContext = LogicalAndExpressionContext;

class BitNotExpressionContext extends ExpressionContext {

	constructor(parser, ctx) {
		super(parser);
		super.copyFrom(ctx);
	}

	BitNot() {
		return this.getToken(GameMakerLanguageParser.BitNot, 0);
	};

	expression() {
		return this.getTypedRuleContext(ExpressionContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterBitNotExpression(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitBitNotExpression(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitBitNotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}

GameMakerLanguageParser.BitNotExpressionContext = BitNotExpressionContext;

class LiteralExpressionContext extends ExpressionContext {

	constructor(parser, ctx) {
		super(parser);
		super.copyFrom(ctx);
	}

	literal() {
		return this.getTypedRuleContext(LiteralContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterLiteralExpression(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitLiteralExpression(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}

GameMakerLanguageParser.LiteralExpressionContext = LiteralExpressionContext;

class LogicalOrExpressionContext extends ExpressionContext {

	constructor(parser, ctx) {
		super(parser);
		super.copyFrom(ctx);
	}

	expression = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTypedRuleContexts(ExpressionContext);
		} else {
			return this.getTypedRuleContext(ExpressionContext, i);
		}
	};

	Or() {
		return this.getToken(GameMakerLanguageParser.Or, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterLogicalOrExpression(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitLogicalOrExpression(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitLogicalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}

GameMakerLanguageParser.LogicalOrExpressionContext = LogicalOrExpressionContext;

class VariableExpressionContext extends ExpressionContext {

	constructor(parser, ctx) {
		super(parser);
		super.copyFrom(ctx);
	}

	lValueExpression() {
		return this.getTypedRuleContext(LValueExpressionContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterVariableExpression(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitVariableExpression(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitVariableExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}

GameMakerLanguageParser.VariableExpressionContext = VariableExpressionContext;

class NotExpressionContext extends ExpressionContext {

	constructor(parser, ctx) {
		super(parser);
		super.copyFrom(ctx);
	}

	Not() {
		return this.getToken(GameMakerLanguageParser.Not, 0);
	};

	expression() {
		return this.getTypedRuleContext(ExpressionContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterNotExpression(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitNotExpression(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitNotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}

GameMakerLanguageParser.NotExpressionContext = NotExpressionContext;

class AssignmentExpressionLabelContext extends ExpressionContext {

	constructor(parser, ctx) {
		super(parser);
		super.copyFrom(ctx);
	}

	assignmentExpression() {
		return this.getTypedRuleContext(AssignmentExpressionContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterAssignmentExpressionLabel(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitAssignmentExpressionLabel(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitAssignmentExpressionLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}

GameMakerLanguageParser.AssignmentExpressionLabelContext = AssignmentExpressionLabelContext;

class UnaryMinusExpressionContext extends ExpressionContext {

	constructor(parser, ctx) {
		super(parser);
		super.copyFrom(ctx);
	}

	Minus() {
		return this.getToken(GameMakerLanguageParser.Minus, 0);
	};

	expression() {
		return this.getTypedRuleContext(ExpressionContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterUnaryMinusExpression(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitUnaryMinusExpression(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitUnaryMinusExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}

GameMakerLanguageParser.UnaryMinusExpressionContext = UnaryMinusExpressionContext;

class BitAndExpressionContext extends ExpressionContext {

	constructor(parser, ctx) {
		super(parser);
		super.copyFrom(ctx);
	}

	expression = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTypedRuleContexts(ExpressionContext);
		} else {
			return this.getTypedRuleContext(ExpressionContext, i);
		}
	};

	BitAnd() {
		return this.getToken(GameMakerLanguageParser.BitAnd, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterBitAndExpression(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitBitAndExpression(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitBitAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}

GameMakerLanguageParser.BitAndExpressionContext = BitAndExpressionContext;

class LogicalXorExpressionContext extends ExpressionContext {

	constructor(parser, ctx) {
		super(parser);
		super.copyFrom(ctx);
	}

	expression = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTypedRuleContexts(ExpressionContext);
		} else {
			return this.getTypedRuleContext(ExpressionContext, i);
		}
	};

	Xor() {
		return this.getToken(GameMakerLanguageParser.Xor, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterLogicalXorExpression(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitLogicalXorExpression(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitLogicalXorExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}

GameMakerLanguageParser.LogicalXorExpressionContext = LogicalXorExpressionContext;

class BitOrExpressionContext extends ExpressionContext {

	constructor(parser, ctx) {
		super(parser);
		super.copyFrom(ctx);
	}

	expression = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTypedRuleContexts(ExpressionContext);
		} else {
			return this.getTypedRuleContext(ExpressionContext, i);
		}
	};

	BitOr() {
		return this.getToken(GameMakerLanguageParser.BitOr, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterBitOrExpression(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitBitOrExpression(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitBitOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}

GameMakerLanguageParser.BitOrExpressionContext = BitOrExpressionContext;

class EqualityExpressionContext extends ExpressionContext {

	constructor(parser, ctx) {
		super(parser);
		super.copyFrom(ctx);
	}

	expression = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTypedRuleContexts(ExpressionContext);
		} else {
			return this.getTypedRuleContext(ExpressionContext, i);
		}
	};

	Equals_() {
		return this.getToken(GameMakerLanguageParser.Equals_, 0);
	};

	Assign() {
		return this.getToken(GameMakerLanguageParser.Assign, 0);
	};

	NotEquals() {
		return this.getToken(GameMakerLanguageParser.NotEquals, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterEqualityExpression(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitEqualityExpression(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}

GameMakerLanguageParser.EqualityExpressionContext = EqualityExpressionContext;

class BitXOrExpressionContext extends ExpressionContext {

	constructor(parser, ctx) {
		super(parser);
		super.copyFrom(ctx);
	}

	expression = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTypedRuleContexts(ExpressionContext);
		} else {
			return this.getTypedRuleContext(ExpressionContext, i);
		}
	};

	BitXOr() {
		return this.getToken(GameMakerLanguageParser.BitXOr, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterBitXOrExpression(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitBitXOrExpression(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitBitXOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}

GameMakerLanguageParser.BitXOrExpressionContext = BitXOrExpressionContext;

class CallExpressionContext extends ExpressionContext {

	constructor(parser, ctx) {
		super(parser);
		super.copyFrom(ctx);
	}

	callStatement() {
		return this.getTypedRuleContext(CallStatementContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterCallExpression(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitCallExpression(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitCallExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}

GameMakerLanguageParser.CallExpressionContext = CallExpressionContext;

class MultiplicativeExpressionContext extends ExpressionContext {

	constructor(parser, ctx) {
		super(parser);
		super.copyFrom(ctx);
	}

	expression = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTypedRuleContexts(ExpressionContext);
		} else {
			return this.getTypedRuleContext(ExpressionContext, i);
		}
	};

	Multiply() {
		return this.getToken(GameMakerLanguageParser.Multiply, 0);
	};

	Divide() {
		return this.getToken(GameMakerLanguageParser.Divide, 0);
	};

	Modulo() {
		return this.getToken(GameMakerLanguageParser.Modulo, 0);
	};

	IntegerDivide() {
		return this.getToken(GameMakerLanguageParser.IntegerDivide, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterMultiplicativeExpression(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitMultiplicativeExpression(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}

GameMakerLanguageParser.MultiplicativeExpressionContext = MultiplicativeExpressionContext;

class CoalesceExpressionContext extends ExpressionContext {

	constructor(parser, ctx) {
		super(parser);
		super.copyFrom(ctx);
	}

	expression = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTypedRuleContexts(ExpressionContext);
		} else {
			return this.getTypedRuleContext(ExpressionContext, i);
		}
	};

	NullCoalesce() {
		return this.getToken(GameMakerLanguageParser.NullCoalesce, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterCoalesceExpression(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitCoalesceExpression(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitCoalesceExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}

GameMakerLanguageParser.CoalesceExpressionContext = CoalesceExpressionContext;

class BitShiftExpressionContext extends ExpressionContext {

	constructor(parser, ctx) {
		super(parser);
		super.copyFrom(ctx);
	}

	expression = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTypedRuleContexts(ExpressionContext);
		} else {
			return this.getTypedRuleContext(ExpressionContext, i);
		}
	};

	LeftShiftArithmetic() {
		return this.getToken(GameMakerLanguageParser.LeftShiftArithmetic, 0);
	};

	RightShiftArithmetic() {
		return this.getToken(GameMakerLanguageParser.RightShiftArithmetic, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterBitShiftExpression(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitBitShiftExpression(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitBitShiftExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}

GameMakerLanguageParser.BitShiftExpressionContext = BitShiftExpressionContext;

class CallStatementContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_callStatement;
	}

	callableExpression() {
		return this.getTypedRuleContext(CallableExpressionContext, 0);
	};

	arguments() {
		return this.getTypedRuleContext(ArgumentsContext, 0);
	};

	callStatement() {
		return this.getTypedRuleContext(CallStatementContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterCallStatement(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitCallStatement(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitCallStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class CallableExpressionContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_callableExpression;
	}

	lValueExpression() {
		return this.getTypedRuleContext(LValueExpressionContext, 0);
	};

	OpenParen() {
		return this.getToken(GameMakerLanguageParser.OpenParen, 0);
	};

	CloseParen() {
		return this.getToken(GameMakerLanguageParser.CloseParen, 0);
	};

	functionDeclaration() {
		return this.getTypedRuleContext(FunctionDeclarationContext, 0);
	};

	callableExpression() {
		return this.getTypedRuleContext(CallableExpressionContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterCallableExpression(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitCallableExpression(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitCallableExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class IncDecStatementContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_incDecStatement;
	}



	copyFrom(ctx) {
		super.copyFrom(ctx);
	}

}


class PostIncDecExpressionContext extends IncDecStatementContext {

	constructor(parser, ctx) {
		super(parser);
		super.copyFrom(ctx);
	}

	lValueExpression() {
		return this.getTypedRuleContext(LValueExpressionContext, 0);
	};

	PlusPlus() {
		return this.getToken(GameMakerLanguageParser.PlusPlus, 0);
	};

	MinusMinus() {
		return this.getToken(GameMakerLanguageParser.MinusMinus, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterPostIncDecExpression(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitPostIncDecExpression(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitPostIncDecExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}

GameMakerLanguageParser.PostIncDecExpressionContext = PostIncDecExpressionContext;

class PreIncDecExpressionContext extends IncDecStatementContext {

	constructor(parser, ctx) {
		super(parser);
		super.copyFrom(ctx);
	}

	lValueExpression() {
		return this.getTypedRuleContext(LValueExpressionContext, 0);
	};

	PlusPlus() {
		return this.getToken(GameMakerLanguageParser.PlusPlus, 0);
	};

	MinusMinus() {
		return this.getToken(GameMakerLanguageParser.MinusMinus, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterPreIncDecExpression(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitPreIncDecExpression(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitPreIncDecExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}

GameMakerLanguageParser.PreIncDecExpressionContext = PreIncDecExpressionContext;

class AccessorContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_accessor;
	}

	OpenBracket() {
		return this.getToken(GameMakerLanguageParser.OpenBracket, 0);
	};

	ListAccessor() {
		return this.getToken(GameMakerLanguageParser.ListAccessor, 0);
	};

	MapAccessor() {
		return this.getToken(GameMakerLanguageParser.MapAccessor, 0);
	};

	GridAccessor() {
		return this.getToken(GameMakerLanguageParser.GridAccessor, 0);
	};

	ArrayAccessor() {
		return this.getToken(GameMakerLanguageParser.ArrayAccessor, 0);
	};

	StructAccessor() {
		return this.getToken(GameMakerLanguageParser.StructAccessor, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterAccessor(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitAccessor(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitAccessor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class ArgumentsContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_arguments;
	}

	OpenParen() {
		return this.getToken(GameMakerLanguageParser.OpenParen, 0);
	};

	CloseParen() {
		return this.getToken(GameMakerLanguageParser.CloseParen, 0);
	};

	expressionOrFunction = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTypedRuleContexts(ExpressionOrFunctionContext);
		} else {
			return this.getTypedRuleContext(ExpressionOrFunctionContext, i);
		}
	};

	Comma = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTokens(GameMakerLanguageParser.Comma);
		} else {
			return this.getToken(GameMakerLanguageParser.Comma, i);
		}
	};


	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterArguments(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitArguments(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class AssignmentOperatorContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_assignmentOperator;
	}

	MultiplyAssign() {
		return this.getToken(GameMakerLanguageParser.MultiplyAssign, 0);
	};

	DivideAssign() {
		return this.getToken(GameMakerLanguageParser.DivideAssign, 0);
	};

	ModulusAssign() {
		return this.getToken(GameMakerLanguageParser.ModulusAssign, 0);
	};

	PlusAssign() {
		return this.getToken(GameMakerLanguageParser.PlusAssign, 0);
	};

	MinusAssign() {
		return this.getToken(GameMakerLanguageParser.MinusAssign, 0);
	};

	LeftShiftArithmeticAssign() {
		return this.getToken(GameMakerLanguageParser.LeftShiftArithmeticAssign, 0);
	};

	RightShiftArithmeticAssign() {
		return this.getToken(GameMakerLanguageParser.RightShiftArithmeticAssign, 0);
	};

	BitAndAssign() {
		return this.getToken(GameMakerLanguageParser.BitAndAssign, 0);
	};

	BitXorAssign() {
		return this.getToken(GameMakerLanguageParser.BitXorAssign, 0);
	};

	BitOrAssign() {
		return this.getToken(GameMakerLanguageParser.BitOrAssign, 0);
	};

	NullCoalescingAssign() {
		return this.getToken(GameMakerLanguageParser.NullCoalescingAssign, 0);
	};

	Assign() {
		return this.getToken(GameMakerLanguageParser.Assign, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterAssignmentOperator(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitAssignmentOperator(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitAssignmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class LiteralContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_literal;
	}

	Undefined() {
		return this.getToken(GameMakerLanguageParser.Undefined, 0);
	};

	NoOne() {
		return this.getToken(GameMakerLanguageParser.NoOne, 0);
	};

	BooleanLiteral() {
		return this.getToken(GameMakerLanguageParser.BooleanLiteral, 0);
	};

	StringLiteral() {
		return this.getToken(GameMakerLanguageParser.StringLiteral, 0);
	};

	VerbatimStringLiteral() {
		return this.getToken(GameMakerLanguageParser.VerbatimStringLiteral, 0);
	};

	templateStringLiteral() {
		return this.getTypedRuleContext(TemplateStringLiteralContext, 0);
	};

	HexIntegerLiteral() {
		return this.getToken(GameMakerLanguageParser.HexIntegerLiteral, 0);
	};

	BinaryLiteral() {
		return this.getToken(GameMakerLanguageParser.BinaryLiteral, 0);
	};

	DecimalLiteral() {
		return this.getToken(GameMakerLanguageParser.DecimalLiteral, 0);
	};

	IntegerLiteral() {
		return this.getToken(GameMakerLanguageParser.IntegerLiteral, 0);
	};

	arrayLiteral() {
		return this.getTypedRuleContext(ArrayLiteralContext, 0);
	};

	structLiteral() {
		return this.getTypedRuleContext(StructLiteralContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitLiteral(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class TemplateStringLiteralContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_templateStringLiteral;
	}

	TemplateStringStart() {
		return this.getToken(GameMakerLanguageParser.TemplateStringStart, 0);
	};

	TemplateStringEnd() {
		return this.getToken(GameMakerLanguageParser.TemplateStringEnd, 0);
	};

	templateStringAtom = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTypedRuleContexts(TemplateStringAtomContext);
		} else {
			return this.getTypedRuleContext(TemplateStringAtomContext, i);
		}
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterTemplateStringLiteral(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitTemplateStringLiteral(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitTemplateStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class TemplateStringAtomContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_templateStringAtom;
	}

	TemplateStringText() {
		return this.getToken(GameMakerLanguageParser.TemplateStringText, 0);
	};

	TemplateStringStartExpression() {
		return this.getToken(GameMakerLanguageParser.TemplateStringStartExpression, 0);
	};

	expression() {
		return this.getTypedRuleContext(ExpressionContext, 0);
	};

	TemplateStringEndExpression() {
		return this.getToken(GameMakerLanguageParser.TemplateStringEndExpression, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterTemplateStringAtom(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitTemplateStringAtom(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitTemplateStringAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class ArrayLiteralContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_arrayLiteral;
	}

	OpenBracket() {
		return this.getToken(GameMakerLanguageParser.OpenBracket, 0);
	};

	elementList() {
		return this.getTypedRuleContext(ElementListContext, 0);
	};

	CloseBracket() {
		return this.getToken(GameMakerLanguageParser.CloseBracket, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterArrayLiteral(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitArrayLiteral(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitArrayLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class ElementListContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_elementList;
	}

	Comma = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTokens(GameMakerLanguageParser.Comma);
		} else {
			return this.getToken(GameMakerLanguageParser.Comma, i);
		}
	};


	expressionOrFunction = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTypedRuleContexts(ExpressionOrFunctionContext);
		} else {
			return this.getTypedRuleContext(ExpressionOrFunctionContext, i);
		}
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterElementList(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitElementList(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitElementList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class StructLiteralContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_structLiteral;
	}

	openBlock() {
		return this.getTypedRuleContext(OpenBlockContext, 0);
	};

	closeBlock() {
		return this.getTypedRuleContext(CloseBlockContext, 0);
	};

	propertyAssignment = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTypedRuleContexts(PropertyAssignmentContext);
		} else {
			return this.getTypedRuleContext(PropertyAssignmentContext, i);
		}
	};

	Comma = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTokens(GameMakerLanguageParser.Comma);
		} else {
			return this.getToken(GameMakerLanguageParser.Comma, i);
		}
	};


	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterStructLiteral(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitStructLiteral(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitStructLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class PropertyAssignmentContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_propertyAssignment;
	}

	propertyIdentifier() {
		return this.getTypedRuleContext(PropertyIdentifierContext, 0);
	};

	Colon() {
		return this.getToken(GameMakerLanguageParser.Colon, 0);
	};

	expressionOrFunction() {
		return this.getTypedRuleContext(ExpressionOrFunctionContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterPropertyAssignment(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitPropertyAssignment(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitPropertyAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class PropertyIdentifierContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_propertyIdentifier;
	}

	Identifier() {
		return this.getToken(GameMakerLanguageParser.Identifier, 0);
	};

	softKeyword() {
		return this.getTypedRuleContext(SoftKeywordContext, 0);
	};

	propertySoftKeyword() {
		return this.getTypedRuleContext(PropertySoftKeywordContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterPropertyIdentifier(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitPropertyIdentifier(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitPropertyIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class InheritanceClauseContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_inheritanceClause;
	}

	Colon() {
		return this.getToken(GameMakerLanguageParser.Colon, 0);
	};

	identifier() {
		return this.getTypedRuleContext(IdentifierContext, 0);
	};

	arguments() {
		return this.getTypedRuleContext(ArgumentsContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterInheritanceClause(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitInheritanceClause(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitInheritanceClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class StructDeclarationContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_structDeclaration;
	}

	Function() {
		return this.getToken(GameMakerLanguageParser.Function, 0);
	};

	identifier() {
		return this.getTypedRuleContext(IdentifierContext, 0);
	};

	Constructor() {
		return this.getToken(GameMakerLanguageParser.Constructor, 0);
	};

	block() {
		return this.getTypedRuleContext(BlockContext, 0);
	};

	parameterList() {
		return this.getTypedRuleContext(ParameterListContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterStructDeclaration(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitStructDeclaration(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitStructDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class FunctionDeclarationContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_functionDeclaration;
	}

	Function() {
		return this.getToken(GameMakerLanguageParser.Function, 0);
	};

	parameterList() {
		return this.getTypedRuleContext(ParameterListContext, 0);
	};

	block() {
		return this.getTypedRuleContext(BlockContext, 0);
	};

	Identifier() {
		return this.getToken(GameMakerLanguageParser.Identifier, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterFunctionDeclaration(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitFunctionDeclaration(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitFunctionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class ParameterListContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_parameterList;
	}

	OpenParen() {
		return this.getToken(GameMakerLanguageParser.OpenParen, 0);
	};

	CloseParen() {
		return this.getToken(GameMakerLanguageParser.CloseParen, 0);
	};

	parameterArgument = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTypedRuleContexts(ParameterArgumentContext);
		} else {
			return this.getTypedRuleContext(ParameterArgumentContext, i);
		}
	};

	Comma = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTokens(GameMakerLanguageParser.Comma);
		} else {
			return this.getToken(GameMakerLanguageParser.Comma, i);
		}
	};


	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterParameterList(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitParameterList(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class ParameterArgumentContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_parameterArgument;
	}

	identifier() {
		return this.getTypedRuleContext(IdentifierContext, 0);
	};

	Assign() {
		return this.getToken(GameMakerLanguageParser.Assign, 0);
	};

	expressionOrFunction() {
		return this.getTypedRuleContext(ExpressionOrFunctionContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterParameterArgument(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitParameterArgument(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitParameterArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class IdentifierContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_identifier;
	}

	Identifier() {
		return this.getToken(GameMakerLanguageParser.Identifier, 0);
	};

	softKeyword() {
		return this.getTypedRuleContext(SoftKeywordContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitIdentifier(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class EnumeratorDeclarationContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_enumeratorDeclaration;
	}

	Enum() {
		return this.getToken(GameMakerLanguageParser.Enum, 0);
	};

	identifier() {
		return this.getTypedRuleContext(IdentifierContext, 0);
	};

	openBlock() {
		return this.getTypedRuleContext(OpenBlockContext, 0);
	};

	closeBlock() {
		return this.getTypedRuleContext(CloseBlockContext, 0);
	};

	enumeratorList() {
		return this.getTypedRuleContext(EnumeratorListContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterEnumeratorDeclaration(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitEnumeratorDeclaration(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitEnumeratorDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class EnumeratorListContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_enumeratorList;
	}

	enumerator = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTypedRuleContexts(EnumeratorContext);
		} else {
			return this.getTypedRuleContext(EnumeratorContext, i);
		}
	};

	Comma = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTokens(GameMakerLanguageParser.Comma);
		} else {
			return this.getToken(GameMakerLanguageParser.Comma, i);
		}
	};


	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterEnumeratorList(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitEnumeratorList(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitEnumeratorList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class EnumeratorContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_enumerator;
	}

	identifier() {
		return this.getTypedRuleContext(IdentifierContext, 0);
	};

	Assign() {
		return this.getToken(GameMakerLanguageParser.Assign, 0);
	};

	IntegerLiteral() {
		return this.getToken(GameMakerLanguageParser.IntegerLiteral, 0);
	};

	HexIntegerLiteral() {
		return this.getToken(GameMakerLanguageParser.HexIntegerLiteral, 0);
	};

	BinaryLiteral() {
		return this.getToken(GameMakerLanguageParser.BinaryLiteral, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterEnumerator(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitEnumerator(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitEnumerator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class MacroStatementContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_macroStatement;
	}

	Macro() {
		return this.getToken(GameMakerLanguageParser.Macro, 0);
	};

	identifier() {
		return this.getTypedRuleContext(IdentifierContext, 0);
	};

	LineTerminator() {
		return this.getToken(GameMakerLanguageParser.LineTerminator, 0);
	};

	EOF() {
		return this.getToken(GameMakerLanguageParser.EOF, 0);
	};

	macroToken = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTypedRuleContexts(MacroTokenContext);
		} else {
			return this.getTypedRuleContext(MacroTokenContext, i);
		}
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterMacroStatement(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitMacroStatement(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitMacroStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class DefineStatementContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_defineStatement;
	}

	Define() {
		return this.getToken(GameMakerLanguageParser.Define, 0);
	};

	RegionCharacters() {
		return this.getToken(GameMakerLanguageParser.RegionCharacters, 0);
	};

	RegionEOL() {
		return this.getToken(GameMakerLanguageParser.RegionEOL, 0);
	};

	EOF() {
		return this.getToken(GameMakerLanguageParser.EOF, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterDefineStatement(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitDefineStatement(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitDefineStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class RegionStatementContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_regionStatement;
	}

	Region() {
		return this.getToken(GameMakerLanguageParser.Region, 0);
	};

	EndRegion() {
		return this.getToken(GameMakerLanguageParser.EndRegion, 0);
	};

	RegionEOL() {
		return this.getToken(GameMakerLanguageParser.RegionEOL, 0);
	};

	EOF() {
		return this.getToken(GameMakerLanguageParser.EOF, 0);
	};

	RegionCharacters() {
		return this.getToken(GameMakerLanguageParser.RegionCharacters, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterRegionStatement(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitRegionStatement(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitRegionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class IdentifierStatementContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_identifierStatement;
	}

	identifier() {
		return this.getTypedRuleContext(IdentifierContext, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterIdentifierStatement(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitIdentifierStatement(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitIdentifierStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class SoftKeywordContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_softKeyword;
	}

	Self() {
		return this.getToken(GameMakerLanguageParser.Self, 0);
	};

	Other() {
		return this.getToken(GameMakerLanguageParser.Other, 0);
	};

	All() {
		return this.getToken(GameMakerLanguageParser.All, 0);
	};

	Constructor() {
		return this.getToken(GameMakerLanguageParser.Constructor, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterSoftKeyword(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitSoftKeyword(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitSoftKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class PropertySoftKeywordContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_propertySoftKeyword;
	}

	NoOne() {
		return this.getToken(GameMakerLanguageParser.NoOne, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterPropertySoftKeyword(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitPropertySoftKeyword(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitPropertySoftKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class OpenBlockContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_openBlock;
	}

	OpenBrace() {
		return this.getToken(GameMakerLanguageParser.OpenBrace, 0);
	};

	Begin() {
		return this.getToken(GameMakerLanguageParser.Begin, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterOpenBlock(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitOpenBlock(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitOpenBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class CloseBlockContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_closeBlock;
	}

	CloseBrace() {
		return this.getToken(GameMakerLanguageParser.CloseBrace, 0);
	};

	End() {
		return this.getToken(GameMakerLanguageParser.End, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterCloseBlock(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitCloseBlock(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitCloseBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class EosContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_eos;
	}

	SemiColon() {
		return this.getToken(GameMakerLanguageParser.SemiColon, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterEos(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitEos(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitEos(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}



class MacroTokenContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = GameMakerLanguageParser.RULE_macroToken;
	}

	EscapedNewLine() {
		return this.getToken(GameMakerLanguageParser.EscapedNewLine, 0);
	};

	OpenBracket() {
		return this.getToken(GameMakerLanguageParser.OpenBracket, 0);
	};

	CloseBracket() {
		return this.getToken(GameMakerLanguageParser.CloseBracket, 0);
	};

	OpenParen() {
		return this.getToken(GameMakerLanguageParser.OpenParen, 0);
	};

	CloseParen() {
		return this.getToken(GameMakerLanguageParser.CloseParen, 0);
	};

	OpenBrace() {
		return this.getToken(GameMakerLanguageParser.OpenBrace, 0);
	};

	CloseBrace() {
		return this.getToken(GameMakerLanguageParser.CloseBrace, 0);
	};

	Begin() {
		return this.getToken(GameMakerLanguageParser.Begin, 0);
	};

	End() {
		return this.getToken(GameMakerLanguageParser.End, 0);
	};

	SemiColon() {
		return this.getToken(GameMakerLanguageParser.SemiColon, 0);
	};

	Comma() {
		return this.getToken(GameMakerLanguageParser.Comma, 0);
	};

	Assign() {
		return this.getToken(GameMakerLanguageParser.Assign, 0);
	};

	Colon() {
		return this.getToken(GameMakerLanguageParser.Colon, 0);
	};

	Dot() {
		return this.getToken(GameMakerLanguageParser.Dot, 0);
	};

	PlusPlus() {
		return this.getToken(GameMakerLanguageParser.PlusPlus, 0);
	};

	MinusMinus() {
		return this.getToken(GameMakerLanguageParser.MinusMinus, 0);
	};

	Plus() {
		return this.getToken(GameMakerLanguageParser.Plus, 0);
	};

	Minus() {
		return this.getToken(GameMakerLanguageParser.Minus, 0);
	};

	BitNot() {
		return this.getToken(GameMakerLanguageParser.BitNot, 0);
	};

	Not() {
		return this.getToken(GameMakerLanguageParser.Not, 0);
	};

	Multiply() {
		return this.getToken(GameMakerLanguageParser.Multiply, 0);
	};

	Divide() {
		return this.getToken(GameMakerLanguageParser.Divide, 0);
	};

	IntegerDivide() {
		return this.getToken(GameMakerLanguageParser.IntegerDivide, 0);
	};

	Modulo() {
		return this.getToken(GameMakerLanguageParser.Modulo, 0);
	};

	Power() {
		return this.getToken(GameMakerLanguageParser.Power, 0);
	};

	QuestionMark() {
		return this.getToken(GameMakerLanguageParser.QuestionMark, 0);
	};

	NullCoalesce() {
		return this.getToken(GameMakerLanguageParser.NullCoalesce, 0);
	};

	NullCoalescingAssign() {
		return this.getToken(GameMakerLanguageParser.NullCoalescingAssign, 0);
	};

	RightShiftArithmetic() {
		return this.getToken(GameMakerLanguageParser.RightShiftArithmetic, 0);
	};

	LeftShiftArithmetic() {
		return this.getToken(GameMakerLanguageParser.LeftShiftArithmetic, 0);
	};

	LessThan() {
		return this.getToken(GameMakerLanguageParser.LessThan, 0);
	};

	MoreThan() {
		return this.getToken(GameMakerLanguageParser.MoreThan, 0);
	};

	LessThanEquals() {
		return this.getToken(GameMakerLanguageParser.LessThanEquals, 0);
	};

	GreaterThanEquals() {
		return this.getToken(GameMakerLanguageParser.GreaterThanEquals, 0);
	};

	Equals_() {
		return this.getToken(GameMakerLanguageParser.Equals_, 0);
	};

	NotEquals() {
		return this.getToken(GameMakerLanguageParser.NotEquals, 0);
	};

	BitAnd() {
		return this.getToken(GameMakerLanguageParser.BitAnd, 0);
	};

	BitXOr() {
		return this.getToken(GameMakerLanguageParser.BitXOr, 0);
	};

	BitOr() {
		return this.getToken(GameMakerLanguageParser.BitOr, 0);
	};

	And() {
		return this.getToken(GameMakerLanguageParser.And, 0);
	};

	Or() {
		return this.getToken(GameMakerLanguageParser.Or, 0);
	};

	Xor() {
		return this.getToken(GameMakerLanguageParser.Xor, 0);
	};

	MultiplyAssign() {
		return this.getToken(GameMakerLanguageParser.MultiplyAssign, 0);
	};

	DivideAssign() {
		return this.getToken(GameMakerLanguageParser.DivideAssign, 0);
	};

	PlusAssign() {
		return this.getToken(GameMakerLanguageParser.PlusAssign, 0);
	};

	MinusAssign() {
		return this.getToken(GameMakerLanguageParser.MinusAssign, 0);
	};

	ModulusAssign() {
		return this.getToken(GameMakerLanguageParser.ModulusAssign, 0);
	};

	LeftShiftArithmeticAssign() {
		return this.getToken(GameMakerLanguageParser.LeftShiftArithmeticAssign, 0);
	};

	RightShiftArithmeticAssign() {
		return this.getToken(GameMakerLanguageParser.RightShiftArithmeticAssign, 0);
	};

	BitAndAssign() {
		return this.getToken(GameMakerLanguageParser.BitAndAssign, 0);
	};

	BitXorAssign() {
		return this.getToken(GameMakerLanguageParser.BitXorAssign, 0);
	};

	BitOrAssign() {
		return this.getToken(GameMakerLanguageParser.BitOrAssign, 0);
	};

	NumberSign() {
		return this.getToken(GameMakerLanguageParser.NumberSign, 0);
	};

	DollarSign() {
		return this.getToken(GameMakerLanguageParser.DollarSign, 0);
	};

	AtSign() {
		return this.getToken(GameMakerLanguageParser.AtSign, 0);
	};

	Undefined() {
		return this.getToken(GameMakerLanguageParser.Undefined, 0);
	};

	NoOne() {
		return this.getToken(GameMakerLanguageParser.NoOne, 0);
	};

	BooleanLiteral() {
		return this.getToken(GameMakerLanguageParser.BooleanLiteral, 0);
	};

	IntegerLiteral() {
		return this.getToken(GameMakerLanguageParser.IntegerLiteral, 0);
	};

	DecimalLiteral() {
		return this.getToken(GameMakerLanguageParser.DecimalLiteral, 0);
	};

	BinaryLiteral() {
		return this.getToken(GameMakerLanguageParser.BinaryLiteral, 0);
	};

	HexIntegerLiteral() {
		return this.getToken(GameMakerLanguageParser.HexIntegerLiteral, 0);
	};

	Break() {
		return this.getToken(GameMakerLanguageParser.Break, 0);
	};

	Exit() {
		return this.getToken(GameMakerLanguageParser.Exit, 0);
	};

	Do() {
		return this.getToken(GameMakerLanguageParser.Do, 0);
	};

	Case() {
		return this.getToken(GameMakerLanguageParser.Case, 0);
	};

	Else() {
		return this.getToken(GameMakerLanguageParser.Else, 0);
	};

	New() {
		return this.getToken(GameMakerLanguageParser.New, 0);
	};

	Var() {
		return this.getToken(GameMakerLanguageParser.Var, 0);
	};

	GlobalVar() {
		return this.getToken(GameMakerLanguageParser.GlobalVar, 0);
	};

	Catch() {
		return this.getToken(GameMakerLanguageParser.Catch, 0);
	};

	Finally() {
		return this.getToken(GameMakerLanguageParser.Finally, 0);
	};

	Return() {
		return this.getToken(GameMakerLanguageParser.Return, 0);
	};

	Continue() {
		return this.getToken(GameMakerLanguageParser.Continue, 0);
	};

	For() {
		return this.getToken(GameMakerLanguageParser.For, 0);
	};

	Switch() {
		return this.getToken(GameMakerLanguageParser.Switch, 0);
	};

	While() {
		return this.getToken(GameMakerLanguageParser.While, 0);
	};

	Until() {
		return this.getToken(GameMakerLanguageParser.Until, 0);
	};

	Repeat() {
		return this.getToken(GameMakerLanguageParser.Repeat, 0);
	};

	Function() {
		return this.getToken(GameMakerLanguageParser.Function, 0);
	};

	With() {
		return this.getToken(GameMakerLanguageParser.With, 0);
	};

	Default() {
		return this.getToken(GameMakerLanguageParser.Default, 0);
	};

	If() {
		return this.getToken(GameMakerLanguageParser.If, 0);
	};

	Throw() {
		return this.getToken(GameMakerLanguageParser.Throw, 0);
	};

	Delete() {
		return this.getToken(GameMakerLanguageParser.Delete, 0);
	};

	Try() {
		return this.getToken(GameMakerLanguageParser.Try, 0);
	};

	Enum() {
		return this.getToken(GameMakerLanguageParser.Enum, 0);
	};

	Constructor() {
		return this.getToken(GameMakerLanguageParser.Constructor, 0);
	};

	Static() {
		return this.getToken(GameMakerLanguageParser.Static, 0);
	};

	Identifier() {
		return this.getToken(GameMakerLanguageParser.Identifier, 0);
	};

	StringLiteral() {
		return this.getToken(GameMakerLanguageParser.StringLiteral, 0);
	};

	VerbatimStringLiteral() {
		return this.getToken(GameMakerLanguageParser.VerbatimStringLiteral, 0);
	};

	TemplateStringStart() {
		return this.getToken(GameMakerLanguageParser.TemplateStringStart, 0);
	};

	TemplateStringEnd() {
		return this.getToken(GameMakerLanguageParser.TemplateStringEnd, 0);
	};

	TemplateStringText() {
		return this.getToken(GameMakerLanguageParser.TemplateStringText, 0);
	};

	TemplateStringStartExpression() {
		return this.getToken(GameMakerLanguageParser.TemplateStringStartExpression, 0);
	};

	TemplateStringEndExpression() {
		return this.getToken(GameMakerLanguageParser.TemplateStringEndExpression, 0);
	};

	ListAccessor() {
		return this.getToken(GameMakerLanguageParser.ListAccessor, 0);
	};

	MapAccessor() {
		return this.getToken(GameMakerLanguageParser.MapAccessor, 0);
	};

	GridAccessor() {
		return this.getToken(GameMakerLanguageParser.GridAccessor, 0);
	};

	ArrayAccessor() {
		return this.getToken(GameMakerLanguageParser.ArrayAccessor, 0);
	};

	StructAccessor() {
		return this.getToken(GameMakerLanguageParser.StructAccessor, 0);
	};

	enterRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.enterMacroToken(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof GameMakerLanguageParserListener) {
			listener.exitMacroToken(this);
		}
	}

	accept(visitor) {
		if (visitor instanceof GameMakerLanguageParserVisitor) {
			return visitor.visitMacroToken(this);
		} else {
			return visitor.visitChildren(this);
		}
	}


}

GameMakerLanguageParser.ProgramContext = ProgramContext;
GameMakerLanguageParser.StatementListContext = StatementListContext;
GameMakerLanguageParser.StatementContext = StatementContext;
GameMakerLanguageParser.BlockContext = BlockContext;
GameMakerLanguageParser.IfStatementContext = IfStatementContext;
GameMakerLanguageParser.IterationStatementContext = IterationStatementContext;
GameMakerLanguageParser.WithStatementContext = WithStatementContext;
GameMakerLanguageParser.SwitchStatementContext = SwitchStatementContext;
GameMakerLanguageParser.ContinueStatementContext = ContinueStatementContext;
GameMakerLanguageParser.BreakStatementContext = BreakStatementContext;
GameMakerLanguageParser.ExitStatementContext = ExitStatementContext;
GameMakerLanguageParser.EmptyStatementContext = EmptyStatementContext;
GameMakerLanguageParser.CaseBlockContext = CaseBlockContext;
GameMakerLanguageParser.CaseClausesContext = CaseClausesContext;
GameMakerLanguageParser.CaseClauseContext = CaseClauseContext;
GameMakerLanguageParser.DefaultClauseContext = DefaultClauseContext;
GameMakerLanguageParser.ThrowStatementContext = ThrowStatementContext;
GameMakerLanguageParser.TryStatementContext = TryStatementContext;
GameMakerLanguageParser.CatchProductionContext = CatchProductionContext;
GameMakerLanguageParser.FinallyProductionContext = FinallyProductionContext;
GameMakerLanguageParser.ReturnStatementContext = ReturnStatementContext;
GameMakerLanguageParser.DeleteStatementContext = DeleteStatementContext;
GameMakerLanguageParser.AssignmentExpressionContext = AssignmentExpressionContext;
GameMakerLanguageParser.VariableDeclarationListContext = VariableDeclarationListContext;
GameMakerLanguageParser.VarModifierContext = VarModifierContext;
GameMakerLanguageParser.VariableDeclarationContext = VariableDeclarationContext;
GameMakerLanguageParser.GlobalVarStatementContext = GlobalVarStatementContext;
GameMakerLanguageParser.NewExpressionContext = NewExpressionContext;
GameMakerLanguageParser.LValueStartExpressionContext = LValueStartExpressionContext;
GameMakerLanguageParser.LValueExpressionContext = LValueExpressionContext;
GameMakerLanguageParser.LValueChainOperatorContext = LValueChainOperatorContext;
GameMakerLanguageParser.LValueFinalOperatorContext = LValueFinalOperatorContext;
GameMakerLanguageParser.ExpressionSequenceContext = ExpressionSequenceContext;
GameMakerLanguageParser.ExpressionOrFunctionContext = ExpressionOrFunctionContext;
GameMakerLanguageParser.ExpressionContext = ExpressionContext;
GameMakerLanguageParser.CallStatementContext = CallStatementContext;
GameMakerLanguageParser.CallableExpressionContext = CallableExpressionContext;
GameMakerLanguageParser.IncDecStatementContext = IncDecStatementContext;
GameMakerLanguageParser.AccessorContext = AccessorContext;
GameMakerLanguageParser.ArgumentsContext = ArgumentsContext;
GameMakerLanguageParser.AssignmentOperatorContext = AssignmentOperatorContext;
GameMakerLanguageParser.LiteralContext = LiteralContext;
GameMakerLanguageParser.TemplateStringLiteralContext = TemplateStringLiteralContext;
GameMakerLanguageParser.TemplateStringAtomContext = TemplateStringAtomContext;
GameMakerLanguageParser.ArrayLiteralContext = ArrayLiteralContext;
GameMakerLanguageParser.ElementListContext = ElementListContext;
GameMakerLanguageParser.StructLiteralContext = StructLiteralContext;
GameMakerLanguageParser.PropertyAssignmentContext = PropertyAssignmentContext;
GameMakerLanguageParser.PropertyIdentifierContext = PropertyIdentifierContext;
GameMakerLanguageParser.InheritanceClauseContext = InheritanceClauseContext;
GameMakerLanguageParser.StructDeclarationContext = StructDeclarationContext;
GameMakerLanguageParser.FunctionDeclarationContext = FunctionDeclarationContext;
GameMakerLanguageParser.ParameterListContext = ParameterListContext;
GameMakerLanguageParser.ParameterArgumentContext = ParameterArgumentContext;
GameMakerLanguageParser.IdentifierContext = IdentifierContext;
GameMakerLanguageParser.EnumeratorDeclarationContext = EnumeratorDeclarationContext;
GameMakerLanguageParser.EnumeratorListContext = EnumeratorListContext;
GameMakerLanguageParser.EnumeratorContext = EnumeratorContext;
GameMakerLanguageParser.MacroStatementContext = MacroStatementContext;
GameMakerLanguageParser.DefineStatementContext = DefineStatementContext;
GameMakerLanguageParser.RegionStatementContext = RegionStatementContext;
GameMakerLanguageParser.IdentifierStatementContext = IdentifierStatementContext;
GameMakerLanguageParser.SoftKeywordContext = SoftKeywordContext;
GameMakerLanguageParser.PropertySoftKeywordContext = PropertySoftKeywordContext;
GameMakerLanguageParser.OpenBlockContext = OpenBlockContext;
GameMakerLanguageParser.CloseBlockContext = CloseBlockContext;
GameMakerLanguageParser.EosContext = EosContext;
GameMakerLanguageParser.MacroTokenContext = MacroTokenContext; 
