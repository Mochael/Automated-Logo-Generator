FasdUAS 1.101.10   ��   ��    k             l    
 ����  O     
  	  I   	�� 
��
�� .coredoscnull��� ��� ctxt 
 m       �   � / U s e r s / m i c h a e l k r o n o v e t / D e s k t o p / A u t o m a t e d - L o g o - G e n e r a t o r / A z u r e . j s��   	 m       �                                                                                      @ alis    <  Macintosh HD                   BD ����Terminal.app                                                   ����            ����  
 cu             	Utilities   &/:Applications:Utilities:Terminal.app/    T e r m i n a l . a p p    M a c i n t o s h   H D  #Applications/Utilities/Terminal.app   / ��  ��  ��        l     ��������  ��  ��        l    ����  r        I   ��  
�� .sysodlogaskr        TEXT  m       �   0 E n t e r   d e s i r e d   B r a n d   N a m e  ��  
�� 
dtxt  m       �      ��  
�� 
btns  J          !   m     " " � # #  N o   p r e f e r e n c e !  $�� $ m     % % � & &  O k��    �� '��
�� 
dflt ' m     ( ( � ) )  O k��    o      ���� 0 
brandinput 
brandInput��  ��     * + * l   7 ,���� , Z    7 - .�� / - l   ! 0���� 0 =    ! 1 2 1 n     3 4 3 1    ��
�� 
bhit 4 o    ���� 0 
brandinput 
brandInput 2 m      5 5 � 6 6  N o   p r e f e r e n c e��  ��   . r   $ + 7 8 7 m   $ ' 9 9 � : :   8 o      ���� 0 brandreturned brandReturned��   / r   . 7 ; < ; n   . 3 = > = 1   / 3��
�� 
ttxt > o   . /���� 0 
brandinput 
brandInput < o      ���� 0 brandreturned brandReturned��  ��   +  ? @ ? l  8 ; A���� A e   8 ; B B o   8 ;���� 0 brandreturned brandReturned��  ��   @  C D C l     ��������  ��  ��   D  E F E l  < ` G���� G r   < ` H I H I  < \�� J K
�� .sysodlogaskr        TEXT J m   < ? L L � M M 2 D r a g   I m a g e   i n t o   b o x   b e l o w K �� N O
�� 
dtxt N m   @ C P P � Q Q   O �� R S
�� 
btns R J   D L T T  U V U m   D G W W � X X  C a n c e l V  Y�� Y m   G J Z Z � [ [  O k��   S �� \ ]
�� 
dflt \ m   M P ^ ^ � _ _  O k ] �� `��
�� 
cbtn ` m   S V a a � b b  C a n c e l��   I o      ���� 0 	imagepath 	imagePath��  ��   F  c d c l     ��������  ��  ��   d  e f e l     ��������  ��  ��   f  g h g l  a p i���� i r   a p j k j J   a l l l  m n m m   a d o o � p p 
 f a n c y n  q r q m   d g s s � t t  f r i e n d l y r  u�� u m   g j v v � w w 
 k i d l y��   k o      ���� 0 textstylelist textStyleList��  ��   h  x y x l  q � z���� z r   q � { | { I  q ��� } ~
�� .gtqpchltns    @   @ ns   } o   q t���� 0 textstylelist textStyleList ~ ��  �
�� 
prmp  m   w z � � � � � " S e l e c t   f o n t   s t y l e � �� ���
�� 
cnbt � m   } � � � � � �  N o   p r e f e r e n c e��   | o      ���� "0 chosentextstyle chosenTextStyle��  ��   y  � � � l     ��������  ��  ��   �  � � � l     �� � ���   � * $tell application "Adobe Illustrator"    � � � � H t e l l   a p p l i c a t i o n   " A d o b e   I l l u s t r a t o r " �  � � � l     �� � ���   � - ' 'do javascript' runs any arbitrary JS.    � � � � N   ' d o   j a v a s c r i p t '   r u n s   a n y   a r b i t r a r y   J S . �  � � � l     �� � ���   � 6 0 We're using the #include feature to run another    � � � � `   W e ' r e   u s i n g   t h e   # i n c l u d e   f e a t u r e   t o   r u n   a n o t h e r �  � � � l     �� � ���   � / ) file. (That's an Adobe extension to JS.)    � � � � R   f i l e .   ( T h a t ' s   a n   A d o b e   e x t e n s i o n   t o   J S . ) �  � � � l     ��������  ��  ��   �  � � � l     �� � ���   � : 4 You have to pass a full, absolute path to #include.    � � � � h   Y o u   h a v e   t o   p a s s   a   f u l l ,   a b s o l u t e   p a t h   t o   # i n c l u d e . �  � � � l     ��������  ��  ��   �  � � � l     �� � ���   � 5 / The documentation alleges that 'do javascript'    � � � � ^   T h e   d o c u m e n t a t i o n   a l l e g e s   t h a t   ' d o   j a v a s c r i p t ' �  � � � l     �� � ���   � 4 . can be passed an AppleScript file object, but    � � � � \   c a n   b e   p a s s e d   a n   A p p l e S c r i p t   f i l e   o b j e c t ,   b u t �  � � � l     �� � ���   � ) # I wasn't able to get that to work.    � � � � F   I   w a s n ' t   a b l e   t o   g e t   t h a t   t o   w o r k . �  � � � l     �� � ���   � j d do javascript "#include /Users/Tanishq/Documents/ALG/Automated-Logo-Generator/Illustratorscript.js"    � � � � �   d o   j a v a s c r i p t   " # i n c l u d e   / U s e r s / T a n i s h q / D o c u m e n t s / A L G / A u t o m a t e d - L o g o - G e n e r a t o r / I l l u s t r a t o r s c r i p t . j s " �  � � � l     �� � ���   �  end tell    � � � �  e n d   t e l l �  � � � l     ��������  ��  ��   �  � � � l  � � ����� � I  � ��� � �
�� .sysodlogaskr        TEXT � m   � � � � � � � H C h e c k   y o u r   _ _ _   f o l d e r   f o r   t h e   f i l e s ! � �� � �
�� 
btns � J   � � � �  ��� � m   � � � � � � �  O k��   � �� ���
�� 
dflt � m   � � � � � � �  O k��  ��  ��   �  � � � l  � � ����� � r   � � � � � I  � ��� � �
�� .sysodlogaskr        TEXT � m   � � � � � � � Z I f   y o u   l i k e d   a n   i m a g e ,   d r a g   i t   i n t o   b o x   b e l o w � �� � �
�� 
dtxt � m   � � � � � � �   � �� � �
�� 
btns � J   � � � �  � � � m   � � � � � � � ( D i d n ' t   l i k e   a n   i m a g e �  ��� � m   � � � � � � �  O k��   � �� ���
�� 
dflt � m   � � � � � � �  O k��   � o      ���� (0 likedimagelocation likedImageLocation��  ��   �  � � � l  � � ����� � O   � � � � � s   � � � � � 4   � ��� �
�� 
file � o   � ����� (0 likedimagelocation likedImageLocation � 4   � ��� �
�� 
cfol � o   � ����� 0 savedimages SavedImages � m   � � � ��                                                                                  MACS  alis    @  Macintosh HD                   BD ����
Finder.app                                                     ����            ����  
 cu             CoreServices  )/:System:Library:CoreServices:Finder.app/    
 F i n d e r . a p p    M a c i n t o s h   H D  &System/Library/CoreServices/Finder.app  / ��  ��  ��   �  � � � l  �( ����� � Z   �( � ��� � � l  � � ����� � =   � � � � � n   � � � � � 1   � ���
�� 
bhit � o   � ����� (0 likedimagelocation likedImageLocation � m   � � � � �   ( D i d n ' t   l i k e   a n   i m a g e��  ��   � r   � � m   � ���
�� boovfals o      ���� 0 
likedimage 
likedImage��   � k   �(  r   � � n   � �	 1   � ���
�� 
ttxt	 o   � ����� (0 likedimagelocation likedImageLocation o      ���� 0 
likedimage 
likedImage 

 r   � J   �  m   � � �  s h a p e   t y p e  m   � � �  o r i e n t a t i o n  m   � � �  c o l o r s  m   � � 
 s t y l e �� m     �!!  n a m e��   o      ����  0 likedpartslist likedPartsList "��" r  (#$# I $��%&
�� .gtqpchltns    @   @ ns  % o  ����  0 likedpartslist likedPartsList& ��'(
�� 
prmp' m  )) �** * S e l e c t   w h a t   y o u   l i k e d( ��+,
�� 
cnbt+ m  -- �..  N o t h i n g, ��/��
�� 
mlsl/ m   ��
�� boovtrue��  $ o      �� 0 
likedparts 
likedParts��  ��  ��   � 0�~0 l     �}�|�{�}  �|  �{  �~       
�z12345678�y�z  1 �x�w�v�u�t�s�r�q
�x .aevtoappnull  �   � ****�w 0 
brandinput 
brandInput�v 0 brandreturned brandReturned�u 0 	imagepath 	imagePath�t 0 textstylelist textStyleList�s "0 chosentextstyle chosenTextStyle�r (0 likedimagelocation likedImageLocation�q  2 �p9�o�n:;�m
�p .aevtoappnull  �   � ****9 k    (<<  ==  >>  *??  ?@@  EAA  gBB  xCC  �DD  �EE  �FF  ��l�l  �o  �n  :  ; A  �k �j �i " %�h (�g�f�e�d 5 9�c�b L P W Z ^�a a�`�_ o s v�^�] ��\ ��[�Z�Y � � � � � � � ��X ��W�V�U ��T �S�R)-�Q�P
�k .coredoscnull��� ��� ctxt
�j 
dtxt
�i 
btns
�h 
dflt�g 
�f .sysodlogaskr        TEXT�e 0 
brandinput 
brandInput
�d 
bhit�c 0 brandreturned brandReturned
�b 
ttxt
�a 
cbtn�` �_ 0 	imagepath 	imagePath�^ 0 textstylelist textStyleList
�] 
prmp
�\ 
cnbt�[ 
�Z .gtqpchltns    @   @ ns  �Y "0 chosentextstyle chosenTextStyle�X (0 likedimagelocation likedImageLocation
�W 
file
�V 
cfol�U 0 savedimages SavedImages�T 0 
likedimage 
likedImage�S �R  0 likedpartslist likedPartsList
�Q 
mlsl�P 0 
likedparts 
likedParts�m)� �j UO������lv��� E�O��,�  a E` Y �a ,E` O_ Oa �a �a a lv�a a a a  E` Oa a a mvE` O_ a  a !a "a #a $ %E` &Oa '�a (kv�a )a $ Oa *�a +�a ,a -lv�a .� E` /Oa 0 *a 1_ //*a 2_ 3/GUO_ /�,a 4  
fE` 5Y A_ /a ,E` 5Oa 6a 7a 8a 9a :a ;vE` <O_ <a  a =a "a >a ?e� %E` @3 �OGH
�O 
bhitG �II  O kH �N4�M
�N 
ttxt4 �JJ  s d v�M  5 �LKL
�L 
bhitK �MM  O kL �KN�J
�K 
ttxtN �OO  d s v�J  6 �IP�I P   o s v7 �HQ�H Q  RR �SS  f r i e n d l y8 �GTU
�G 
bhitT �VV ( D i d n ' t   l i k e   a n   i m a g eU �FW�E
�F 
ttxtW �XX  �E  �y  ascr  ��ޭ